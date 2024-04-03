const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const structureSchema = new Schema({
    structure_id: Number,
    structure_type: String,
    user_id: Number,
    images: [String],
    tags: [String],
    files: [String]
});

const Structure = mongoose.model('Structure', structureSchema);

module.exports = Structure;