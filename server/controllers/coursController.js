import Cours from "../models/cours.js"
import cloudinary from "cloudinary";
import Meet from "../models/meet.js";

const coursController = {

    getAllCourses: async(req, res, next) => {
        try {
            const courses = await Cours.find()
            
            res.status(200).json({
                success: true,
                data: courses
            })
        } catch (error) {
            console.log(error)
        }
    },

    addCourse: async(req, res) => {

        try {
            const data  = req.body
    
            const thumbnail = data.thumbnail
    
            if (thumbnail) {
                const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
                    folder: "video",
                });
        
                data.thumbnail = {
                  public_id: myCloud.public_id,
                  url: myCloud.secure_url,
                };
                
            }
            
            const course =  await Cours.create(data)
            
            res.status(200).json({
                success: true,
                data: course
            })
            
        } catch (error) {
            console.log(error)
        }
        
    },

    singleCours: async(req, res) => {

        const coursId = req.params.id

        try {
            const course = await Cours.findById(coursId)

            res.status(200).json({
                success: true,
                data: course
            })
        } catch (error) {
            console.log(error)
        }
    },

    getCourseContent: async(req, res) => {

        try {
            const courseId = req.params.id;
    
            const course = await Cours.findById(courseId);
      
            const content = course?.courseData;
      
            res.status(200).json({
              data: content,
            });

          } catch (error) {
            
            return next(new ErrorHandler(error.message, 500));
          }
    },

    getMeetingId: async(req, res) => {

        try {
            const meet = await Meet.find()

            res.status(200).json({
                success: true,
                data: meet
            })
        } catch (error) {
            
            console.log(error)
        }

    }
}

export default coursController