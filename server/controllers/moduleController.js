const Module = require('../models/modules')
const multer = require('multer');


const moduleController =  {

    ajouterModule : async(req, res) => {
        try {

            // const newModule = new Module({
            //     nom: "req.body.nom",
            //     departement: 1,
            //     image: "req.file.filename"
            // });
            // await newModule.save();
            // res.json(newModule);
            res.send(req)
            console.log(req)

        } catch (error) {
            // console.log(error)
            console.log("erreur bete")
            // res.status(500).json({message: 'Erreur grave de serveur'})
        }
    }
}

module.exports = moduleController