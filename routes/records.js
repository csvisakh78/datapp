const express = require("express");
const { fetchRecords } = require("../controllers/records");
const { validateRequest } = require("../middlewares/helpers");
const { validateFetchContentRequest } = require("../middlewares/validations");

const recordRouter = express.Router();

recordRouter.post(
  "/",
  validateFetchContentRequest(), 
  validateRequest, 
  fetchRecords 
);

module.exports = recordRouter;
