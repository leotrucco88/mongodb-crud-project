const mongoose = require("mongoose");

const characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    appearances: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Character', characterSchema);