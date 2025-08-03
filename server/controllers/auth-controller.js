const authCtrl = {},
  jwt = require("jsonwebtoken");
require("dotenv").config();

authCtrl.verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized request" });
  }
  next();
};

authCtrl.validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized request" });
  }

  jwt.verify(token, process.env.SECRET_TOKEN, (err, payload) => {
    if (err && err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    }
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    if (!payload) {
      return res.status(401).json({ error: "Unauthorized request" });
    }
    req.roleID = Number(payload.roleID);
    req.userID = Number(payload.userID);
    next();
  });
};

authCtrl.validateAdmin = (req, res, next) => {
  if (req.roleID !== 1) {
    return res.status(403).json({ error: "Insufficient permissions" });
  }
  next();
};

module.exports = authCtrl;
