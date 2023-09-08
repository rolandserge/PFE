import Module from '../models/modules.js'


const moduleController = {
    
    ajouterModule : async(req, res) => {
        try {

            const { nom, departement } = req.body;
            const image = req.file.filename;

            const newModule = new Module({
                nom: nom,
                departement: departement,
                image: image
            });
            const data = await newModule.save();

            res.status(200).send({ success: true, message: "Module creer avec succes", data: data });


        } catch (error) {
            res.status(500).json({message: 'Erreur grave de serveur'})
        }
    },
    listeModule: async(req, res) => {

        const modules = await Module.find({})
        res.status(200).json({ success: true, data: modules})
    },
    modifierModule: async(req, res) => {

        await Module.updateOne({_id: req.body.id}, { nom: "Formation node.js" })
        res.status(200).json({ success: true, message: "Le module a été mise a jour avec success"})

    },
    supprimerModule: async(req, res) => {

        const id = req.params.id
        await Module.deleteOne({_id: id})
        res.status(200).json({ success: true, message: "Le module a été supprimé avec success"})

    }
}
export default moduleController