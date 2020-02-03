const express = require('express');
const router = express.Router();
const axios = require('axios');
const edn = require('jsedn');

module.exports = async (inputData) => {
    //state must be in lower case per OCD-ID 
    const state = inputData.state.toLowerCase();
    const city = inputData.city.toLowerCase().replace(/[|&;"',.]/g, '~').replace(/ /g, '_');
    try {
        const response = await axios.get(`https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${city}`)
        
        const responseData = edn.toJS(edn.parse(response.data));

            
        console.log(responseData,'this is responseData')
        return responseData;
    } catch (err) {
        console.log(error)
    }
};