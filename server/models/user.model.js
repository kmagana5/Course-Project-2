const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: { type: Number, required: true },
  user_type: { type: String, required: true },
  company: { type: String, required: false },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
}, {
  timestamps: true,
});

const UserProfile = mongoose.model('UserProfile', userSchema);

module.exports = UserProfile;