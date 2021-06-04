const express = require('express');
const app = express();
const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));



app.listen(8080,()=>{
    console.log("server running at port 8080");
})