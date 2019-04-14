var express = require('express');
var router = express.Router();

// get page model
var Page = require('../models/page');

//
// get all pages
//

router.get('/', function(req, res) {
    Page.find({}, function(err, pages) {
        if (err) console.log(err);
        res.json(pages);
    })
});

module.exports = router;