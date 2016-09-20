/**
 * Created by chapeau on 9/20/16.
 */
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(require('./controllers'));
app.use('/static', express.static('public'));

app.listen(8081, function(){
    console.log('App listening!');
});