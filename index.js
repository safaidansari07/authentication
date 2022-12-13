const express = require('express');
const app = express();
const cors = require('cors'); 
require('dotenv').config();
const bodyParser = require("body-parser"); 
const port = process.env.PORT || 8000; 
const db = require('./config/mongoose');
// const routes = require('./routes/index'); 
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log('Something went wrong for connecting to the server ');
    }
    console.log("Our server are runing at port number " , port);
})

module.exports = app;
