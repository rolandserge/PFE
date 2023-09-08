import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

const userController = {

    register: async(req, res) => {

        const { nom, prenom, email, role, password, departement } = req.body;

        const userExists = await User.findOne({ email })

        if(userExists) {
            res.status(400)
            throw new Error("L'utilisateur existe deja")
        }

        const newUser = await User.create({
            nom,
            prenom,
            email,
            role,
            password,
            departement,
        })

        if(newUser) {

            generateToken(res, newUser._id)

            res.status(201).json({
                _id: newUser._id,
                nom: newUser.nom,
                email: newUser.email,
                role: newUser.role
            })
        } else {

            res.status(400)
            throw new Error("Les données de l'utilisateur sont invalide")
        }

        // res.status(200).send({ success: true, message: "L'utilisateur a été creer avec succes !"})

    },

    login: async(req, res) => {

        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if(user && (await user.matchPassword(password))) {

            generateToken(res, user._id)

            res.json({
                _id: user._id,
                nom: user.nom,
                email: user.email,
                role: user.role,
            })
        } else {

            res.status(401)
            throw new Error('Invalide email ou mot de passe')
        }

    },

    logoutUser: (req, res) => {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0),
          });
        res.status(200).json({ message: 'Logged out successfully' });
    },

    getUserProfile: async(req, res) => {

        const userId = req.user._id

        const user = await User.findById(userId);

        if (user) {
            res.json({
            _id: user._id,
            name: user.nom,
            email: user.email,
            role: user.role,
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    },

    updateUserProfile: async(req, res) => {

        const userId = req.user._id

        const user = await User.findById(userId);

        if (user) {

          user.nom = req.body.nom || user.nom;
          user.email = req.body.email || user.email;
          user.role = req.body.role || user.role;
      
          if (req.body.password) {
            user.password = req.body.password;
          }
      
          const updatedUser = await user.save();
      
          res.json({
            _id: updatedUser._id,
            name: updatedUser.nom,
            email: updatedUser.email,
            role: updatedUser.role
          });
        } else {

          res.status(404);
          throw new Error('User not found');
        }

    },

    deleteUser: async(req, res, next) => {
        try {
            const { id } = req.params
            const user = await User.findById(id)

            if(!user) {
                return next(new Error('User not found'));
            }
            await User.deleteOne({id})

            res.status(200).send({
                success: true,
                message: 'User deleted successfully'
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export default userController;