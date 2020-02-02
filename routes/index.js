const express = require('express');
const router = express.Router();
const usStates = require('../us_state.js');
const apiData = require('../search.js')

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

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const apiCall = await apiData();
    console.log(apiCall,'this is apiCall data?')
    res.render('search', {
      title: 'Local Election Search Results',
      data
    });
  } catch (error) {
    console.error(error)
  }
})


module.exports = router;
