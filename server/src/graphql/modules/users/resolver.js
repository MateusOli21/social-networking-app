const bcrypt = require('bcryptjs');
const { UserInputError } = require('apollo-server');

const User = require('../../../models/User');
const { createUserSchema, loginSchema } = require('../../../util/validators');
const generateToken = require('../../../util/generateToken');

module.exports = {
  Mutation: {
    login: async (_, { username, password }) => {
      const data = { username, password };
      const validateLogin = await loginSchema.validate(data, {
        abortEarly: false,
      });

      if (!validateLogin) {
        throw new UserInputError('Errors', {
          errors: {
            validateLogin,
          },
        });
      }

      const user = await User.findOne({ username });

      if (!user) {
        throw new UserInputError('User not found', {
          errors: {
            user: 'Usuário não encontrado.',
          },
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new UserInputError('Wrong credentials', {
          errors: {
            password: 'Usuário ou senha incorretos.',
          },
        });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    createUser: async (_, { data }) => {
      const validateUser = await createUserSchema.validate(data, {
        abortEarly: false,
      });

      if (!validateUser) {
        throw new UserInputError('Errors', {
          errors: { validateUser },
        });
      }

      let { username, email, password } = data;

      let userExists = await User.findOne({ email });

      if (userExists) {
        throw new UserInputError('Email already taken', {
          errors: {
            email: 'E-mail já associado a uma conta.',
          },
        });
      }

      if (!userExists) userExists = await User.findOne({ username });

      if (userExists)
        throw new UserInputError('Username already taken', {
          errors: {
            username: 'Nome de usuário indisponível.',
          },
        });

      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
