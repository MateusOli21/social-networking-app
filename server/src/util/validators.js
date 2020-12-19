const Yup = require('yup');

const createUserSchema = Yup.object().shape({
  username: Yup.string().required('Digite um usuário válido.'),
  email: Yup.string().email().required('Digite um email válido.'),
  password: Yup.string().min(6, 'A senha deve possuir no mínimo seis dígitos.'),
  confirmPassword: Yup.string('As senhas deve ser iguais').when(
    'password',
    (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Digite um usuário válido.'),
  password: Yup.string()
    .min(6, 'A senha deve possuir no mínimo seis dígitos.')
    .required('Digite a senha.'),
});

module.exports = { createUserSchema, loginSchema };
