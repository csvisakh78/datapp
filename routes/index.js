const express = require("express");
const recordRouter = require("./records");
const router = express.Router();

router.use("/records",recordRouter);

module.exports = router;
