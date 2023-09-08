import mongoose from 'mongoose'

const moduleSchema = new mongoose.Schema({
    nom : {
        type: String,
        required: true
    },
    departement : {
        type: mongoose.Types.ObjectId,
        ref: "Departement"
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
const module = mongoose.model("Module", moduleSchema)

export default module