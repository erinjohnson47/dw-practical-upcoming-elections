const express = require('express');
const router = express.Router();
const axios = require('axios');

module.exports = async () => { 
    await axios.get('https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:ca,ocd-division/country:us/state:ca/place:sacramento')
    .then(response => {
        console.log(response.data); 
    })
    .catch(error => {
        console.log(error)
    })
};