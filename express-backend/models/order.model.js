const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Structure = require('structure.model')

const orderSchema = new Schema({
    order_id: {type: Number, required: true},
    user_id: {type: String, required: true},
    structures: [{
        type: Schema.Types.ObjectId,
        ref: 'Structure'
    }],
    status: String,
    date_submitted: Date
});

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;