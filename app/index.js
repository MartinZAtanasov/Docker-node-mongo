const express = require('express')
const bodyParser = require('body-parser')
const routerPages = require('./routes/pages')
const routerUsersAPI = require('./routes/usersAPI')
const mustacheExpress = require('mustache-express')

// Init
const app = express()
// >

// Middleware
app.use(bodyParser.json())
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', `${__dirname}/views`)
app.set('partials', `${__dirname}/views/partials`)
// >

// Create static/public folder
app.use(express.static(`${__dirname}/public`))
// >

// Routers
app.use('/api/users', routerUsersAPI)
app.use('/', routerPages)
// >

// Server
app.listen(3000, () => console.log('Server running port 3000'))
// >
