const config = require('../config')

const winston = require('winston');
const { transports } = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    defaultMeta: {environment: config.environment },
    transports: [
        new winston.transports.Console()
    ]
});
/*
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}
*/


module.exports = logger;