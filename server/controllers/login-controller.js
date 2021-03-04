const loginCtrl = {},
  userCtrl = require("./user-controller"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

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
      const payload = { subject: user.id };
      const token = jwt.sign(payload, "movie-app-secret-presidio");
      user.token = token;
      res.json(user);
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
