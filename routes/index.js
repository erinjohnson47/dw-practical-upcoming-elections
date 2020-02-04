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

//POST request uses form data to make API call, posts data from API back to search view page
router.post('/', async (req, res, next) => {
  try {
    //data from form
    const data = req.body;
    //make API call by passing data form form into search.js
    const electionDataResponse = await apiData(data);
    res.render('search', {
      title: 'Local Election Search Results',
      data,
      electionDataResponse
    });
    
  } catch (error) {
    console.error(error)
  }
})

module.exports = router;
