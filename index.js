const express = require('express');
const app = express();
const port = 8080;
const db = require('./config/mongoose');
const Detail = require('./config/details');


app.get('/', (req,res)=> {
    res.json({
        "message" : "Welcome to NodeJs!"    
    })


    // res.send('<h1>Welcome to  NodeJS!</h1>')
})


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is set up and running on port: ${port}`)
})