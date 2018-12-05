const express = require('express');
const router = express();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('FinDash Server');
});

module.exports = router;
