const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo:27017/users-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose
