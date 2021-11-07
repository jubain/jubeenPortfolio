// var createError = require('http-errors');
var express = require('express');
const axios = require('axios');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.use(express.urlencoded({ extended: true }))

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=79cabe4e4a60c962dd31a32f94d49bbc&units=metric'

// app.post('/', (req, res) => {
//     console.log(req.body.cityName)
//     const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=79cabe4e4a60c962dd31a32f94d49bbc&units=metric`
//     axios.get(url1)
//         .then(response => {
//             const weatherDesc = response.data.weather[0].description
//             const temp = response.data.main.temp
//             const iconID = response.data.weather[0].icon
//             const icon = `http://openweathermap.org/img/wn/${iconID}@2x.png`
//             res.write(`<h1>The temperature in ${req.body.cityName} is ${temp}C</h1>`)
//             res.write(`<p>The weather is currently ${weatherDesc}</p>`)
//             res.write(`<img src="${icon}"/>`)
//             res.send()
//         })
//         .catch(error => {
//             console.log(error);
//         });
// })

app.post('/', (req, res) => {
    //console.log(req.body.myText)
    const text = req.body.myText
    res.render('', { text: text })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/calc.html')
})
// app.get('/', (req, res) => {
//     axios.get(url)
//         .then(response => {
//             const weatherDesc = response.data.weather[0].description
//             const temp = response.data.main.temp
//             const iconID = response.data.weather[0].icon
//             const icon = `http://openweathermap.org/img/wn/${iconID}@2x.png`
//             res.write(`<h1>The temperature in London is ${temp}C</h1>`)
//             res.write(`<p>The weather is currently ${weatherDesc}</p>`)
//             res.write(`<img src="${icon}"/>`)
//             res.send()
//         })
//         .catch(error => {
//             console.log(error);
//         });
// })

app.listen(3000, () => console.log('3000'))

//module.exports = app;

//79cabe4e4a60c962dd31a32f94d49bbc
