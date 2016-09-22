/**
 * Created by chapeau on 9/20/16.
 */
var express = require('express');
var router = express.Router();

router.use(require('./runGenerator.js'));

router.get('/', function (req, res){
    res.render('index');
});

module.exports = router;