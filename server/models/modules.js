const mongoose = require('mongoose');
const moduleSchema = new mongoose.Schema({
    nom : {
        type: String,
        required: true
    },
    departement : {
        type: Number,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now()
    }
})
module.exports = mongoose.model("Module", moduleSchema)