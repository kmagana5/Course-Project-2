const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saveSchema = new Schema({
// optional array of strings for tagging items in the cart
products:[{type:mongoose.Schema.Types.ObjectId, ref: 'Product'}]
}, {
  timestamps: true,
});

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;