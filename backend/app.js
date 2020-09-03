const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hpp = require('hpp');
const httpStatus = require('http-status');
const requestIp = require('request-ip');

const errorHelper = require('./helpers/errorHelper');

// set up routes
const landingAPI = require('./routes/landingAPI');
const adminAPI = require('./routes/adminAPI');

const app = express();

// load public folder files
app.use(express.static(path.join(__dirname, 'data'))); // pass a folder for read only

// allows for form submission as json file
app.use(bodyParser.urlencoded({extended: false}));
// protect against HTTP Parameter Pollution attacks
app.use(hpp());

// CORS setup for dev
app.use(function(req, res, next) {
  req.client_ip_address = requestIp.getClientIp(req);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT, PATCH');
  next();
});

app.use('/api', landingAPI);
app.use('/admin', adminAPI);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res, next) => {
  if (err.status === 404) {
    return errorHelper.sendError(res, httpStatus.NOT_FOUND, err, 'Route Not Found');
  } else {
    console.log(err);
    return errorHelper.sendError(res, httpStatus.INTERNAL_SERVER_ERROR, err, null);
  }
});

module.exports = app;


