import mongoose from "mongoose";

const courSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
    },
    module : {
        type: mongoose.Types.ObjectId,
        ref: "Module"
    },
    content: [
        {
            chapiters : [
                {
                    chapterName: {
                        type: String
                    },
                    videoUrl: {
                        type: String,
                    },
                    status: {
                        type: Boolean,
                        default: false
                    },
                    ressources: [
                        {
                            fileName: {
                                type: String,
                            },
                            fileType: {
                                type: String
                            },
                            fileLink: {
                                type: String
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

const cours = mongoose.model('Cours', courSchema)

export default cours