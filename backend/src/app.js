const express = require('express')
const app = express();
const mongoose = require('./database')

const cors = require('cors')

//Settings
app.set('port', 3000 || process.env.PORT)


//Middleware
app.use(cors())
app.use(express.json())

//Routes

module.exports = app;
