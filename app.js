var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var admin = require('./models/admin');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users').router;
var adminRouter = require('./routes/admin');
var TestRouter = require('./routes/exams');
var StaffRouter = require('./routes/staff');

var login = require('./models/currentloggedinuser')
var passport = require('passport');
var authenticate = require('./authenticate');
const mongoose = require('mongoose');
var config = require('./config');
var db1;
var cors = require('cors')
const EventEmitter = require('events')
var bodyParser = require('body-parser')
const stream = new EventEmitter()
const url = config.mongoUrl;
const connect = mongoose.connect(url);
var result;
var temp;
// var port = 3000
// const port = process.env.PORT;

connect.then((db) => {
    db1 = ('conFusion')
    console.log("Connected correctly to server");
    temp = process.cwd();
    console.log(process.cwd());
    
}, (err) => { console.log(err); });

// const collection = login;
// const changeStream = collection.watch();
// changeStream.on('change', next => {
//   // process next document
//   console.log('change detected')
// });

var app = express();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// app.use(cors());
// app.all('*', (req, res, next) => {
//   if (req.secure) {
//     return next();
//   }
//   else {
//     res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
//   }
// });

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true},),);
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/admin', adminRouter);
app.use('/api/test', TestRouter);
app.use('/api/staff', StaffRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + "/quizgenerator/dist/quizgenerator"));
app.get('/*', (req,res) => {
  // res.sendFile(path.join(__dirname,'/dist/quizgenerator/index.html'));
  console.log('/')
  res.sendFile(path.join(__dirname+"/quizgenerator/dist/quizgenerator/index.html"));
});
app.listen(process.env.PORT || 3000);

// app.get('/*', function(req,res) {
  // 
  // res.sendFile(process.cwd()+"quizgenerator/dist/quizgenerator/index.html")
  // 
// });

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
  res.render('error');
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.set( 'port', ( process.env.PORT || 3000 ));

// Start node server
// app.listen( app.get( 'port' ), function() {
//   console.log( 'Node server is running on port ' + app.get( 'port' ));
//   });

//   app.listen(port, () => 
//     console.log(`Server listening on the port::${port}`
// ));


module.exports = app;
