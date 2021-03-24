const express = require("express"),
  app = express(),
  router = require("./routes/routes"),
  cors = require("cors"),
  morgan = require("morgan");
require("dotenv").config();

const corsOptions = {
  origin: process.env.DEV_HOST,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(morgan("combined"));

app.use(express.static("public"));

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, function () {
  console.log("Server running on port: ", process.env.PORT);
});
