const express = require('express')
const { getAll, getOne, addOne, deleteOne } = require('../controllers/users')
const router = express.Router()

router.get('/', getAll)

router.get('/:id', getOne)

router.post('/', addOne)

router.put('/:id', (req, res) => {
  return res.json('Update one !!!')
})

router.delete('/:id', deleteOne)

module.exports = router
