const { validateUser } = require('../helpers/userValidation')
const { deleteUser, createUser, updateUser } = require('../services/users')

// Helper function
const defaultResponse = (res, success) => {
  if (success) {
    return res.json({ success: true })
  } else {
    return res.json({
      error: { details: [{ message: 'something went wrong' }] }
    })
  }
}
// >

exports.onDeleteUser = async (_id, res) => {
  const { success } = await deleteUser(_id)
  return res.json({ success })
}

exports.onCreateUser = async (req, res) => {
  const user = req.body
  // Validate
  const { error } = validateUser(user)
  if (error) return res.json({ error })
  // >

  // Create user in DB
  const { success } = await createUser(user)
  return defaultResponse(res, success)
  // >
}

exports.onUpdateUser = async (req, res) => {
  const user = req.body
  // Validate
  const { error } = validateUser(user)
  if (error) return res.json({ error })
  // >

  // Create user in DB
  const { success } = await updateUser(user)
  return defaultResponse(res, success)
  // >
}
