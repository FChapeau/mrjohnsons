/**
 * Created by francois.drouin on 2016-09-22.
 */
var express = require('express');
var router = express.Router();

router.get('/rungenerator', function(req, res){
    res.render('runGenerator');
});

module.exports = router;