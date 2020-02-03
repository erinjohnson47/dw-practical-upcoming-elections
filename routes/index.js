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
    const responseData = await apiData(data);
    res.render('search', {
      title: 'Local Election Search Results',
      data,
      responseData
    });
    
  } catch (error) {
    console.error(error)
  }
})


module.exports = router;
