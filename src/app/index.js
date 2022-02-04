const express = require('express');
const app = express();
const env =require('dotenv/config')
const routes = require('./routes/index'); 

const api_version = process.env.API_VERSION;

//middlware 
app.use(express.json());


//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})


app.use(`/${api_version}/tasks`,routes);

module.exports = app;
