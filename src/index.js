require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const path = require('path')
const app = express();

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//Route
app.use(require('./routes/index'));
//static content
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
console.log("server is listening...")

