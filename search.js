const express = require('express');
const router = express.Router();
const axios = require('axios');

module.exports = async (inputData) => {
    //state must be in lower case per OCD-ID 
    const state = inputData.state.toLowerCase();
    //replace special chars with ~ and spaces with _
    const city = inputData.city.toLowerCase().replace(/[|&;"',.]/g, '~').replace(/ /g, '_');
    try {
        const response = await axios.get(`https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${city}`, {
            headers: {
                Accept: 'application/json'
            }
        })
        const responseData = response.data

        return responseData[0];
    } catch (err) {
        console.log(error)
    }
};