const Joi = require('joi')

const userSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(15)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required()
    .min(5)
    .max(15),
  _id: Joi.string()
})

exports.validateUser = user => {
  const { error } = userSchema.validate(user, { abortEarly: false })
  return { error }
}
