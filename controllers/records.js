const { Records } = require("../models");

/**
 * FUnction to fetch matched document from records collection
 * @param {*} req
 * @param {*} res
 */
const fetchRecords = async (req, res) => {
  try {
    const { startDate, endDate, minCount, maxCount } = req.body;
    const records = await Records.aggregate([
      // pipeline for fetching matched records
      {
        $match: {
          createdAt: { $gt: new Date(startDate), $lt: new Date(endDate) },
        },
      },
      // project needed keys from document and find the sum of array values in  counts key
      {
        $project: {
          _id: 0,
          totalCount: { $sum: "$counts" },
          createdAt: 1,
          key: 1,
        },
      },
      // pipeline to fetch only document matching sum range
      {
        $match: {
          totalCount: { $gt: minCount, $lt: maxCount },
        },
      },
    ]);
    res.send({
      code: 0,
      msg: "success",
      records,
    });
  } catch (error) {
    return res.status(error.code || 400).json({
      code: 2, // catch errors
      msg: error.message || "Bad request",
    });
  }
};
module.exports = {
  fetchRecords,
};
