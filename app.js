var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
const app = express();

//api endpoints
var TasksAPI = require('./api/task');
var PersonnelAPI = require('./api/personnel');

const PORT = process.env.PORT || 3000;

//app.use(logger('dev'));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cors());
app.use(cookieParser());

app.use('/tasks', TasksAPI);
app.use('/personnel', PersonnelAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({error: err.message})
});

app.listen(PORT);

module.exports = app;