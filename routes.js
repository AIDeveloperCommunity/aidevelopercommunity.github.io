exports.setup = function (app) {
    var home = require('./Controller/home');
    app.get('/', home.index);
}