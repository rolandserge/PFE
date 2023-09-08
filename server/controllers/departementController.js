import Departement from "../models/departement.js";

const departementController = {

    listeDepartement: async(req, res) => {
        
        const departements = await Departement.find({})
        res.status(200).json({ success: true, data: departements})
    },

    ajouterDepartement: async (req, res) => {

        try {
            const { libele, description } = req.body;

            const newDepartement = new Departement({
                libele: libele,
                description: description,
            })
    
            await newDepartement.save()
    
            res.status(200).send({ success: true , message: "Le departement a été creer avec succes ! "})
            
        } catch (error) {

            console.log(error)
        }

    }
}

export default departementController