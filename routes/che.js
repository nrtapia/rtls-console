var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res) {
 
    var db = req.db;
    db.collection('che').find().toArray(function (err, items) {
        res.json(items);
    });


});

module.exports = router;
