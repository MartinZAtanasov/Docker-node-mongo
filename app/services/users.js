const User = require('../models/user')

exports.getAllUsers = async () => {
  try {
    return await User.find({})
  } catch (error) {
    return []
  }
}

exports.deleteUser = async _id => {
  try {
    await User.findOneAndRemove(_id)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

exports.createUser = async user => {
  try {
    await User.create(user)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

exports.getUser = async _id => {
  try {
    const user = await User.find({ _id })
    return user
  } catch (error) {
    return null
  }
}

exports.updateUser = async user => {
  try {
    const { nModified } = await User.updateOne({ _id: user._id }, user)
    if (nModified === 0) throw new Error()
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
