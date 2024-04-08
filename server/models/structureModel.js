const mongoose = require('mongoose');

const structureSchema = new mongoose.Schema({
    structure_type: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    image_urls: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    structure_name: {
        type: String,
        required: true
    }
});

const Structure = mongoose.model('Structure', structureSchema);

module.exports = Structure;
