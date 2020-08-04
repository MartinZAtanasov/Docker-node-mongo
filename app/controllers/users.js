const User = require('../models/user')

exports.getAll = async (req, res) => {
  try {
    const users = await User.find({}).limit(5)
    return res.json({ users })
  } catch (error) {
    return res.json({ error })
  }
}

exports.getOne = async (req, res) => {
  try {
    const user = await User.find({ name: 'Martin' })
    return res.json({ user })
  } catch (error) {
    return res.json({ error })
  }
}

exports.addOne = async (req, res) => {
  try {
    const user = await User.create({
      name: 'Martin',
      email: 'martin@abv.bg',
      password: 'my-solid-password-xxxx'
    })

    return res.json({ user })
  } catch (error) {
    return res.json({ error })
  }
}

exports.deleteOne = async (req, res) => {
  try {
    const user = await User.findOneAndRemove({ name: 'Martin' })
    return res.json({ user })
  } catch (error) {
    return res.json({ error })
  }
}
