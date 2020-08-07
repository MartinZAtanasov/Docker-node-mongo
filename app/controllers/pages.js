const { getAllUsers, getUser } = require('../services/usersDataBase')

exports.renderHome = async (_, res) => {
  const { length } = await getAllUsers()
  res.render('index', { createdUsers: length })
}

exports.renderCreateUser = (_, res) => res.render('create-user')

exports.renderUsers = async (_, res) => {
  const users = await getAllUsers()
  // Attach array index
  users.map((user, index) => (user.index = ++index))
  // >
  res.render('users', { users })
}

exports.renderUpdateUser = async (req, res) => {
  const { id } = req.params
  const [user] = await getUser(id)
  res.render('update-user', { user })
}
