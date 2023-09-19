import mongoose from "mongoose";

const meetSchema = new mongoose.Schema({

    meetingId: {
        type: String,
    },
    status: {
        type: String,
        default: false,
    },
    created : {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const Meet = mongoose.model('Meet', meetSchema)

export default Meet