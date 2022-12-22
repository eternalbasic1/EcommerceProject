require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");

const app = express();
mongoose.set('strictQuery', false);//not very much useful as of now
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED"); 
}).catch((err)=>console.log(err));


const port = process.env.PORT||8000;

app.listen(port,() => {
    console.log(`App is up and running at ${port}`);
});   