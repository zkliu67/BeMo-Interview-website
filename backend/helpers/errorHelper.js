const errorHelper = {};

errorHelper.sendError = (res, status, errors, msg) => {
  const response = {};
  response.errors = errors;
  response.msg = msg;
  // SET render error page
  return res.status(status).json(response);
}

module.exports = errorHelper;