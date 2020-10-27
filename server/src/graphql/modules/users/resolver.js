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
        throw new UserInputError('Errors', { validateLogin });
      }

      const user = await User.findOne({ username });

      if (!user) {
        throw new UserInputError('User not found');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new UserInputError('Wrong credentials');
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
        throw new UserInputError('Errors', { validateUser });
      }

      const { username, email, password } = data;

      const userExists = await User.findOne({ username });

      if (userExists) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is alredy been used.',
          },
        });
      }

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
