var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

// add your routes here

//Q01 NON-PARENT
router.get('/question-02', function (req, res) {

  var relation = req.query['relation'];

  console.log(relation);

  if(relation == 'parent'){
    res.render('question-02')
  }
  else {
    res.redirect('exit-non-parent')
  }

})

//Q02 CS
router.get('/question-03', function (req, res) {

  var orgsInvolved = req.query['organisations'];

  console.log(orgsInvolved);

  if(orgsInvolved == 'yes'){

    res.redirect('exit-fast-cs')

  }
  else {

    res.render('question-03')

  }
})

//Q03 CS
router.get('/section-02-relationship', function (req, res) {

  var childAbuse = req.query['child-abuse'];

  console.log(childAbuse);

  if (childAbuse == 'no') {

    res.render('section-02-relationship')

  }

  else if(childAbuse == 'yes' || (childAbuse && childAbuse.length > 1)){
    res.redirect('/exit-fast-cs')

  }
  else {

    res.render('section-02-relationship')

  }

})

//Q04 What have you tried to make Child Arrangements?


//Q05 Communication
router.get('/question-06', function (req, res) {
  var communication = req.query['communication'];
  console.log(communication);
  if(communication == 'no'){
    res.redirect('/question-07')
  }
  else {
    res.render('question-06')
  }
})

/*
//Q06 Violence
router.get('/question-07', function (req, res) {
  var violentDisagreement2 = req.query['disagreements2'];
  var violentDisagreement3 = req.query['disagreements3'];
  var violentDisagreement4 = req.query['disagreements4'];
  console.log(violentDisagreement2);
  if(violentDisagreement2 == 'yes' || violentDisagreement3 == 'yes' || violentDisagreement4 == 'yes' ){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-07')
  }
})
*/

//Q07 DV - Control
router.get('/question-08', function (req, res) {

  var control = req.query['control'];

  console.log(control);

  if(control == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-08')
  }

})

//Q08 DV - Debt
router.get('/question-09', function (req, res) {
  var debt = req.query['debt'];
  console.log(debt);
  if(debt == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-09')
  }
})

//Q09 DV - Spending
router.get('/question-10', function (req, res) {
  var spending = req.query['spending'];
  console.log(spending);
  if(spending == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-10')
  }
})

//Q10 DV - Fear
router.get('/question-11', function (req, res) {
  var fear = req.query['fear'];
  console.log(fear);
  if(fear == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-11')
  }
})

/*
//Q11 DV - Money - REMOVED
router.get('/question-12', function (req, res) {
  var money = req.query['money'];
  console.log(money);
  if(money == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-12')
  }
})
*/

//Q11 DV - Violence
router.get('/question-12', function (req, res) {
  var violence = req.query['violence'];
  console.log(violence);
  if(violence == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('question-12')
  }
})

//Q12 DV - Sexual
router.get('/exit-safe', function (req, res) {
  var sexual = req.query['sexual'];
  console.log(sexual);
  if(sexual == 'yes'){
    res.redirect('/exit-fast-dv')
  }
  else {
    res.render('exit-safe')
  }
})


//Q11 Risk - CS
router.get('/exit-fast-cs', function (req, res) {
  res.render('exit-fast-cs')
})

//Q11 Risk - DV
router.get('/exit-fast-dv', function (req, res) {
  res.render('exit-fast-dv')
})

module.exports = router
