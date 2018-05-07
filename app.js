var express = require('express');
var debug = require('debug');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');


var app = express();

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')));

routes.setup(app);

app.set('port', process.env.PORT || 80);
var server = app.listen(app.get('port'), function () {
    console.log('AIDC Server start on port' + server.address().port);
});