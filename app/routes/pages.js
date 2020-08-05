const express = require('express')
const {
  renderCreateUser,
  renderHome,
  renderUsers,
  renderUpdateUser
} = require('../controllers/pages')

const router = express.Router()

router.get('/', renderHome)

router.get('/create-user', renderCreateUser)

router.get('/users', renderUsers)

router.get('/users/update/:id', renderUpdateUser)

module.exports = router
