const authCtrl = {},
  jwt = require("jsonwebtoken");
require("dotenv").config();

authCtrl.verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log(1);
    return res.status(401).send("Unauthorized request");
  }
  next();
};

authCtrl.validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    console.log(2);
    return res.status(401).send("Unauthorized request");
  }

  const payload = jwt.verify(
    token,
    process.env.SECRET_TOKEN,
    (err, payload) => {
      if (err && err.name === "TokenExpiredError") {
        return res.status(403).send("Forbidden request");
      }
      if (!payload) {
        return res.status(401).send("Unauthorized request");
      }
      req.roleID = Number(payload.roleID);
      next();
    }
  );
};

authCtrl.validateAdmin = (req, res, next) => {
  if (req.roleID !== 1) {
    console.log(4);
    return res.status(401).send("Unauthorized request");
  }
  next();
};

module.exports = authCtrl;
