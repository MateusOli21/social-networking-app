const Yup = require('yup');

const createUserSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

const loginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().min(6).required(),
});

module.exports = { createUserSchema, loginSchema };
