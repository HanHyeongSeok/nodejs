var express = require('express');
var router = express.Router();

/* GET test page. */
router.post('/', function(req, res, next) {
  console.log(req.param('id'));
  console.log(req.param('pw'));
  if (true) {
    res.redirect('/');
  }else{
      res.redirect('/insert');
  }

});

module.exports = router;
