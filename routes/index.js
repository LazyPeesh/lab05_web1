var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('contact');
});

router.get('/test', (req, res) => {

})

router.post('/message', (req, res) => {
  // var data = req.body;
  // var firstname = data.firstname;
  // var lastname = data.lastname;
  res.render('message', {data : req.body});
});

module.exports = router;