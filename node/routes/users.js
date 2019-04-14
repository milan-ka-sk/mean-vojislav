var express = require('express');
var router = express.Router();

// get user model
var User = require('../models/user');

// //
// // get all users
// //

// router.get('/', function(req, res) {
//     Page.find({}, function(err, pages) {
//         if (err) console.log(err);
//         res.json(pages);
//     })
// });

// //
// // get a page
// //

// router.get('/:slug', function(req, res) {
//     var slug = req.params.slug;

//     Page.findOne({ slug: slug }, function(err, page) {
//         if (err) console.log(err);
//         res.json(page);
//     })
// });

module.exports = router;