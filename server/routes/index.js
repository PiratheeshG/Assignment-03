var express = require('express');
var router = express.Router();

/* Home */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

/* Travel Bucket List */
router.get('/travel', function(req, res, next) {
  res.render('travel', { 
    title: 'Travel Bucket List' 
  });
});

module.exports = router;

