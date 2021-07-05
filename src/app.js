const config = require('./config')
const logger = require('./loaders/logger');
const express = require('express');


async function startServer() {
    const app = express();
    await require('./loaders')(app);

    app.listen(config.port,() => {
        logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️
        ################################################
      `)
    })
}

startServer();

