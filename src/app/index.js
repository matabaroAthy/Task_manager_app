const express = require('express');

const app = express();

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})


module.exports = app;
