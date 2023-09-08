import Cours from "../models/cours.js"

const coursController = {

    getAllCourses: async(req, res, next) => {
        try {
            const courses = await Cours.find().Cours
            
            res.status(200).json({
                success: true,
                data: courses
            })
        } catch (error) {
            console.log(error)
        }
    },

    addCourse : async(req, res) => {

        const data  = req.body

        res.send(data)
        
        try {
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
    }
}

export default coursController