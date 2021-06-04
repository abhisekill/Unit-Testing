const express = require('express');
const app = express();
const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.json())
app.post('/cal',(req,res)=>{
    let fare = 50;
    const {km,min} = req.body;
    fare += km > 5 ? (km-5)*10 : 0;
    fare += min > 15 ? (min-15)*1 : 0;
    
    res.send({totalFare: fare});
})

app.listen(8080,()=>{
    console.log("server running at port 8080");
})