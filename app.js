const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handyUtils = require('handyutils');
const hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    defaultLayout: 'main',
    helpers: {
       addOne: function(value) {
          return value + 1;
        }
    }

});
app.locals.rootpath = __dirname;
// Configuration for express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
// App config
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// =-=-=-=-=-=-=-=-=-= Config vars =-=-=-=-=-=-=-=-=-=-=-=
const port = process.env.PORT || 8080;

// =-=-=-=-=-=-=-=-=-= Routes =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
require('./home')(app);
// Start up the Server
const server = app.listen(port, () => {
  if (process.env.DEBUG) handyUtils.debug('Server Active On', port);
});

module.exports = server;
