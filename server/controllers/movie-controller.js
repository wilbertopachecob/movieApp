const movieCtrl = {};
const db = require("../db/db");

movieCtrl.addMovie = async (data, res) => {
  try {
    const sql = "INSERT INTO movies SET ?";
    const [result] = await db.execute(sql, [data]);
    
    res.status(201).json({ 
      status: "success", 
      message: "Movie added successfully",
      id: result.insertId 
    });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ 
      status: "error", 
      message: "Failed to add movie" 
    });
  }
};

movieCtrl.deleteMovie = async (id, res) => {
  try {
    const sql = "DELETE FROM movies WHERE id = ?";
    const [result] = await db.execute(sql, [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        status: "error", 
        message: "Movie not found" 
      });
    }
    
    res.json({ 
      status: "success", 
      message: "Movie deleted successfully" 
    });
  } catch (error) {
    console.error('Error deleting movie:', error);
    res.status(500).json({ 
      status: "error", 
      message: "Failed to delete movie" 
    });
  }
};

movieCtrl.updateMovie = async (data, res) => {
  try {
    const { id, ...updateData } = data;
    
    if (!id) {
      return res.status(400).json({ 
        status: "error", 
        message: "Movie ID is required" 
      });
    }

    const fields = Object.keys(updateData).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updateData);
    
    const sql = `UPDATE movies SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    const [result] = await db.execute(sql, [...values, id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        status: "error", 
        message: "Movie not found" 
      });
    }
    
    res.json({ 
      status: "success", 
      message: "Movie updated successfully" 
    });
  } catch (error) {
    console.error('Error updating movie:', error);
    res.status(500).json({ 
      status: "error", 
      message: "Failed to update movie" 
    });
  }
};

movieCtrl.getMovies = async (filters = {}, res) => {
  try {
    let sql = "SELECT * FROM movies";
    let params = [];

    if (filters.searchTerm && ["title", "genre"].includes(filters.filter)) {
      sql += ` WHERE ${filters.filter} LIKE ?`;
      params.push(`%${filters.searchTerm}%`);
    }

    sql += " ORDER BY created_at DESC";
    
    const [results] = await db.execute(sql, params);
    res.json(results);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ 
      status: "error", 
      message: "Failed to fetch movies" 
    });
  }
};

movieCtrl.getMovieByID = async (id, res) => {
  try {
    const sql = "SELECT * FROM movies WHERE id = ?";
    const [results] = await db.execute(sql, [id]);
    
    if (results.length === 0) {
      return res.status(404).json({ 
        status: "error", 
        message: "Movie not found" 
      });
    }
    
    res.json(results[0]);
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(500).json({ 
      status: "error", 
      message: "Failed to fetch movie" 
    });
  }
};

module.exports = movieCtrl;
