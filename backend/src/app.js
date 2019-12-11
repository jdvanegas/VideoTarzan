const express = require('express')
const app = express();

const cors = require('cors')

//Settings
app.set('port', 3000 || process.env.PORT)


//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.use("/api/signup", require('./routes/signup'))
app.use("/api/login", require('./routes/login'))

module.exports = app;
