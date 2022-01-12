const express = require("express");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const path = require("path");
require("dotenv").config();
require("./db");

const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", routes);
app.get("*", function (req, res) {
  res.status(404).send("Page Not Found");
});

module.exports = app;
