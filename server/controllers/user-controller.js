const userCtrl = {};
const db = require("../db/db");
const bcrypt = require("bcrypt");

userCtrl.addUser = async (userData, res) => {
  try {
    // Check if user already exists
    const existingUser = await userCtrl.getUserByEmail(userData.email);
    if (existingUser && existingUser.length > 0) {
      return res.status(409).json({
        error: "User with this email already exists"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    // Prepare user data
    const user = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      role_id: userData.role_id || 2 // Default to user role
    };

    const sql = "INSERT INTO users SET ?";
    const [result] = await db.execute(sql, [user]);
    
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      user: {
        id: result.insertId,
        name: user.name,
        email: user.email,
        role_id: user.role_id
      }
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      status: "error",
      message: "Failed to create user"
    });
  }
};

userCtrl.getUserByEmail = async (email) => {
  try {
    const sql = "SELECT id, email, name, password, role_id FROM users WHERE email = ?";
    const [results] = await db.execute(sql, [email]);
    return results;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
};

userCtrl.getUserById = async (id) => {
  try {
    const sql = "SELECT id, email, name, role_id, created_at FROM users WHERE id = ?";
    const [results] = await db.execute(sql, [id]);
    return results[0];
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

userCtrl.updateUser = async (userData, res) => {
  try {
    const { id, ...updateData } = userData;
    
    if (!id) {
      return res.status(400).json({
        status: "error",
        message: "User ID is required"
      });
    }

    // Hash password if provided
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const fields = Object.keys(updateData).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updateData);
    
    const sql = `UPDATE users SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    const [result] = await db.execute(sql, [...values, id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "error",
        message: "User not found"
      });
    }
    
    res.json({
      status: "success",
      message: "User updated successfully"
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      status: "error",
      message: "Failed to update user"
    });
  }
};

userCtrl.deleteUser = async (id, res) => {
  try {
    const sql = "DELETE FROM users WHERE id = ?";
    const [result] = await db.execute(sql, [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "error",
        message: "User not found"
      });
    }
    
    res.json({
      status: "success",
      message: "User deleted successfully"
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      status: "error",
      message: "Failed to delete user"
    });
  }
};

userCtrl.getAllUsers = async (res) => {
  try {
    const sql = "SELECT id, name, email, role_id, created_at FROM users ORDER BY created_at DESC";
    const [results] = await db.execute(sql);
    res.json(results);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch users"
    });
  }
};

module.exports = userCtrl;
