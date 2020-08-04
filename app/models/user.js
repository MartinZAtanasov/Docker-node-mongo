const mongoose = require('../db')

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
})

module.exports = User
