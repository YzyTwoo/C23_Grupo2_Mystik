require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const productosRouter = require('./routes/productos');
const cookieValidate = require('./middlewares/cookieValidate')
const indexRouter = require('./routes/index')


/* API's */
const productsApiRouter = require('./routes/api/products');
const userApiRouter = require('./routes/api/user');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({secret:"secreto", resave:false, saveUninitialized:true}))

app.use(cookieValidate);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);

app.use(productsApiRouter)
app.use(userApiRouter)

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

module.exports = app;
