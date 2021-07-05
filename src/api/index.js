const express = require('express')
const experiences = require('./routes/experiences')


module.exports = () => {
    const app = express.Router();
    experiences(app);
    return app;
}