const express = require('express');
const app = express();
const path = require('path');
const {calculateFare, fareInfo} = require('./utils/fareUtils');

app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.json())

app.post('/cal',(req,res)=>{
    const {km,min} = req.body;
    const fare = calculateFare(km,min);
    res.send({totalFare: fare});
})

app.get('/rates',(req,res)=>{
    res.send(fareInfo);
})

module.exports = app;