const config = require('../config');
const cors = require('cors');
const routes = require('../api')

module.exports = async (app) => {

app.get('/status',(req,res) => {
    res.status(200).end();
});
app.head('/status',(req,res) => {
    res.status(200).end();
})

app.enable('trust proxy');

app.use(cors());

app.use(config.api.prefix,routes());

}

