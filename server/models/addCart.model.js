const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user_id: { type: Number, required: true },
  product_id: {type: String, required:true},
  quantity: {type:Number, required:true},
  total_cost: { type: Number, required: true },

  
}, {
  timestamps: true,
});

const AddtoCart = mongoose.model('AddtoCart', cartSchema);

module.exports = AddtoCart;