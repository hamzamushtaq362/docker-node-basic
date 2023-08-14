const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require('./api/helper/db-connect');
const port = 4000;
// var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }))

// var db = mongoose()
app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'I am working'
    })
});

app.listen(port,()=>{
    console.log(`working on port ${port}`)
})