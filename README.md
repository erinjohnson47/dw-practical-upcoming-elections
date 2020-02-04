# Democracy Works Upcoming Elections Practical

## The Project

A web application that can tell people what elections they have coming up based on their address. 

## User Stories
1. A user visits the site and is presented with an address form. 
2. When the user submits the form, the address is translated into OCD-IDs, which are then used to query the Democracy Works Elections API for upcoming elections for those OCD-IDs.
3. The upcoming election results (if available) are displayed to the user.

## Technologies & Dependencies
node.js | javascript | express | handlebars.js | axios 

## To Run This Application Locally:
1. `cd` into folder location from terminal;
2. `npm install` to install all package dependences;
3. Start the server typing `DEBUG=js-upcoming-elections:* npm start` in the console;
4. Open your browser and browse to [http://localhost:3000/]

## Next steps/Additional features/Bug fixes
Here is a list of things I would incorporate to improve upon this web app with more time:
- Converting the OCD-IDs by address, using available documentation, to locate county rather than using city as place
- Change "state" in API url to "territory" and "district" (DC), where applicable
- explore/address possible edge cases, i.e., more than one upcoming election result, results missing hardcoded properties (i.e., description, website, etc.)
- write testing for api calls and data returned


## Testing

    npm test
