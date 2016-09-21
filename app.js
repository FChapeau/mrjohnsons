/**
 * Created by chapeau on 9/20/16.
 */

 //Some Comment
var express = require('express');
var app = express();
var port = 8081;

app.set('view engine', 'ejs');

app.use(require('./controllers'));
app.use('/static', express.static('public'));

app.listen(port, function(){
    console.log('App listening on port ' + port);
    console.log('To access, navigate to http://localhost:' + port + ' in your favorite browser');
});
