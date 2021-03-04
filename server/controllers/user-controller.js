const db = require("../db/db"),
  userCtrl = {},
  bcrypt = require("bcrypt"),
  util = require("util"),
  query = util.promisify(db.query).bind(db);

userCtrl.addUser = (user, res) => {
  user.password = bcrypt.hashSync(user.password, 10);
  let sql = "INSERT INTO users SET ?";
  let query = db.query(sql, user, (err, result) => {
    if (err) {
      throw err;
    }
    console.log({ result });
    res.json(result);
  });
};

userCtrl.getUserByEmail = (email) => {
  let sql =
    "SELECT id, email, name, password, role_id FROM users WHERE email = ?";
  return query(sql, email);
};

module.exports = userCtrl;
