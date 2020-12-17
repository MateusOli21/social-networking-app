const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;

  if (!authHeader)
    throw new AuthenticationError('Authorization header not provided.');

  const token = authHeader.split('Bearer ')[1];

  if (!token) throw new AuthenticationError('Bearer token not provided.');

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
  } catch (err) {
    throw new AuthenticationError('Invalid/Expired token.');
  }
};
