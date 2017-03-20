var express = require('express');
var router = express.Router();

// Route index page
router.get('/', function (req, res) {

  res.render('index');

  console.log('Routed to home');

});

// add your routes here

router.get('/debit_1_enter_prisoner_details', function (req, res) {

  var debitCardUsed = req.query.id_debit_card;

  console.log(debitCardUsed + ' - Routed to debit card page');

  if(debitCardUsed == 'debit_card'){

    res.render('/debit_1_enter_prisoner_details');

  }

  else {

    res.redirect('/index');

  }

});

module.exports = router;
