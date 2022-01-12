const express = require("express");
const routes = require("./routes");
require('dotenv').config()
require('./db')

const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server has started!");
});
