const config = require('../config')
const mongoose = require('mongoose');
const Db = require('mongodb').Db

module.exports = async () => {
    const connection = await mongoose.connect(config.databaseURL,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    return connection.connection.db;
}