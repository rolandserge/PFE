import mongoose from "mongoose";

const departementSchema = new mongoose.Schema({

    libele : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    created : {
        type: Date,
        required: true,
        default: Date.now()
    }
})
const departement = mongoose.model('Departement', departementSchema)

export default departement