const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: process.env.DEV_HOST,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.static("public"));

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, function () {
  console.log("Server running on port: ", process.env.PORT);
});
