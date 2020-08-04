require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')
const routerUsers = require('./routes/users')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', routerUsers)

app.listen(3000, () => console.log('Server running port 3000'))
