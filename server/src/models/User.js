const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  createAt: String,
});

module.exports = model('User', userSchema);
