const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();
const mainRouter = require('./mainRouter');
const {NOT_FOUND} = require('http-status-codes');
require("./db/mongoClient");


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routing
app.use('/', mainRouter);

// error handler
app.use(function(err, req, res, _) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error 500', err.toString());
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(NOT_FOUND).send('NOT FOUND');
});

module.exports = app;
