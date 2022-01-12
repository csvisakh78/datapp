const { validationResult } = require("express-validator");

/**
 * Function to validate request errors based on middleware check
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg = errors.array()[0]["msg"];
    return res.status(400).json({
      code: 1, //validation errors
      msg,
    });
  }
  next();
};

module.exports = {
  validateRequest,
};
