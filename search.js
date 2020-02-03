const express = require('express');
const router = express.Router();
const axios = require('axios');
const edn = require('jsedn');

module.exports = async (inputData) => {

    //state must be in lower case per OCD-ID 
    const state = inputData.state.toLowerCase();
    console.log(state,'this is state')
    const city = inputData.city.toLowerCase().replace(/[|&;"',.]/g, '~').replace(/ /g, '_');
    console.log(city,'this is city after conversion')
    await axios.get(`https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${city}`)
    .then(response => {
        console.log(response.data, 'this is response'); 
    })
    .catch(error => {
        console.log(error)
    })
};