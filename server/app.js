const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, function () {
  console.log("Server running on port: ", PORT);
});
