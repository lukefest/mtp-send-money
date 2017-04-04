var express = require('express');
var router = express.Router();

// Route index page
router.get('/', function (req, res) {

  res.render('index');

  console.log('Routed to home');

});

// add your routes here

router.get('/payment-choice', function (req, res) {

  var debitCardUsed = req.query.payment_method;

  console.log('Routed to ' + debitCardUsed);

  if(debitCardUsed == 'debit_card'){

    console.log('enter_prisoner_details');

    // res.render('/Users/lukeforsythe/Google Drive/Money To Prisoners (MTP)/Design/UI/Prototyping/help_v1/app/views/debit-card/enter_prisoner_details.html');
    res.render('enter_prisoner_details');

  }

  else {

    console.log('/bank-transfer/before_you_continue');

    res.redirect('/bank-transfer/before_you_continue');

  }

});


module.exports = router;
