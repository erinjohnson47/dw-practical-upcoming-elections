const express = require('express');
const router = express.Router();
const axios = require('axios');

module.exports = async (inputData) => {
    //state must be lower case per OCD-ID 
    const state = inputData.state.toLowerCase();
    //replace special chars with ~ and spaces with _
    const city = inputData.city.toLowerCase().replace(/[|&;"',.]/g, '~').replace(/ /g, '_');
    try {
        const response = await axios.get(`https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${city}`, {
            headers: {
                Accept: 'application/json'
            }
        })
        //if no data, set message to no elections, send message back to index.js
        if (!response.data.length) {
            const noDataMsg = "We did not find any elections coming up in your area, please check back frequently.";
            return noDataMsg;            
        } else {
            //if data, populate object fields for search view, send object back to index.js
            const electionData = {
                description: response.data[0].description,
                type: response.data[0].type.split('-').join(' '),
                website: response.data[0].website,
                date: `${new Date(response.data[0].date).getMonth()+1}/${new Date(response.data[0].date).getUTCDate()}/${new Date(response.data[0].date).getFullYear()}`,
                pollingPlace: response.data[0]['polling-place-url']
            }
            return electionData;
        }
    } catch (err) {
        console.log(error)
    }
};