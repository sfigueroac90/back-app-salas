const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const logger = require('./logger');

module.exports = async (app) => {

    const mongoConnection = await mongooseLoader();

    logger.info("Dd loaded and connected");


    await expressLoader(app);
}