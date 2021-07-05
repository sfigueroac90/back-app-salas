require('dotenv').config();

const port = process.env.PORT;
const environment = process.env.NODE_ENV;
const databaseURL = process.env.DATABASE_URL;

const api = {
    prefix : "/experiences/"
}

module.exports = {
    port, 
    api,
    databaseURL
}
