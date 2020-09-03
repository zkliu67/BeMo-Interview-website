const httpStatus = require('http-status');
const errorHelper = require('../helpers/errorHelper');

exports.getPageLayout = async (req, res, next) => {
  if (req.query.pageTitle) {
    const pageTitle = req.query.pageTitle.toLowerCase();
    
    try {
      const homepage = require(`../data/${pageTitle}`);
      return res.status(200).json({'data': homepage});

    } catch (err) {
      return errorHelper.sendError(res, httpStatus.BAD_REQUEST, err);
    }
  }
  return errorHelper.sendError(res, httpStatus.NOT_FOUND, "NOT FOUND.")
}