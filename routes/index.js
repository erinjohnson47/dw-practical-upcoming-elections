const express = require('express');
const router = express.Router();
const usStates = require('../us_state.js');
// const apiData = require('../search.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    res.render('index', { 
        title: 'Find My Upcoming Elections', 
        states: usStates 
      });
  } catch (err) {
    res.send(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    const data = req.body;
    const dataObject = {
      street: data.street,
      street2: data.street2,
      city: data.city,
      state: data.state,
      zip: data.zip
    }
    console.log(dataObject, 'ths is req.body')    
    res.render('search', {
      title: 'Local Election Search Results',
      dataObject
    });
  } catch (error) {
    console.error(error)
  }
})

module.exports = router;
