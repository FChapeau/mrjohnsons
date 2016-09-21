/**
 * Created by chapeau on 9/20/16.
 */

 //Some Comment
var express = require('express');
var app = express();
var port = 8081;
var models = require('./models');

app.set('view engine', 'ejs');

app.use(require('./controllers'));
app.use(express.static('public'));

models.sequelize.sync().then(function(){
    app.listen(port, function(){
        console.log('App listening on port ' + port);
        console.log('To access, navigate to http://localhost:' + port + ' in your favorite browser');
    });
});