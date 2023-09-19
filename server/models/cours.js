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
    thumbnail: {
        public_id: {
            type: String,
        },
        url: {
            type: String
        }
    },
    modules : {
        type: mongoose.Types.ObjectId,
        ref: "Module"
    },
    courseData : [
            {   
                videoSection: {
                    type: String
                },
                title: {
                    type: String
                },
                videoUrl: {
                    type: String,
                },
                status: {
                    type: Boolean,
                    default: false
                },
                description: {
                    type: String
                },
                links: [
                    {
                        title: {
                            type: String,
                        },
                        url: {
                            type: String
                        },
                        fileType: {
                            type: String,
                            default: "Type fichier"
                        },
                    }
                ]
            }
        ],
    },
    {
        timestamps: true
    }
)

const cours = mongoose.model('Cours', courSchema)

export default cours