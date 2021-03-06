const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

userSchema.methods.serialize = function() {
  return {
    username: this.username || '',
  };
};

module.exports = mongoose.model('User', userSchema, 'users');
