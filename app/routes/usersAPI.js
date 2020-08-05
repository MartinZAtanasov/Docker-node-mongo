const express = require('express')
const {
  onDeleteUser,
  onCreateUser,
  onUpdateUser
} = require('../controllers/users')

const router = express.Router()

router.delete('/:id', (req, res) => onDeleteUser(req.params.id, res))

router.put('/:id', onUpdateUser)

router.post('/', onCreateUser)

module.exports = router
