const { check } = require("express-validator");

/**
 * Function to validate request body params
 */
const validateFetchContentRequest = () => {
  return [
    check("startDate")
      .trim()
      .notEmpty()
      .withMessage("startDate should not be empty")
      .isDate()
      .withMessage("startDate is invalid"),
    check("endDate")
      .trim()
      .notEmpty()
      .withMessage("endDate not be empty")
      .isDate()
      .withMessage("endDate is invalid")
      .custom((endDate, { req }) => {
        endDate = new Date(endDate);
        const startDate = new Date(req.body.startDate);
        if (startDate > endDate) {
          throw new Error("endDate must be greater than startDate");
        }
        return true;
      }),
    check("minCount")
      .notEmpty()
      .withMessage("minCount must not be empty")
      .isNumeric()
      .withMessage("minCount is invalid"),
    check("maxCount")
      .notEmpty()
      .withMessage("maxCount must not be empty")
      .isNumeric()
      .withMessage("maxCount is invalid"),
  ];
};
module.exports = {
  validateFetchContentRequest,
};
