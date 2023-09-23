const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 65,
  },
  userName: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Please enter a valid email address',
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;