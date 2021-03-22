const loginCtrl = {},
  userCtrl = require("./user-controller"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");
require("dotenv").config();

loginCtrl.login = async (data, res) => {
  let user = {};
  try {
    const result = await userCtrl.getUserByEmail(data.email);
    if (result && Array.isArray(result) && result.length) {
      user = result[0];
    }
  } catch (error) {
    console.log(error);
    throw err;
  }

  if (Object.keys(user).length) {
    const isValidPass = bcrypt.compareSync(data.password, user.password);
    if (isValidPass) {
      delete user.password;
      const payload = { userID: user.id, roleID: user.role_id };
      const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: "1h",
      });
      res.json({
        token,
        user,
      });
      return;
    }
    res.status(401);
    res.end();
    return;
  }

  res.status(404);
  res.end();
};

module.exports = loginCtrl;
