const express = require('express');

const route = express.Router();

module.exports = (app) =>{
    app.use('/',route);
    route.get('/',(req,res)=>{
        res.json({message: "Hi get all the the experiencies"});
    })
}
