import { Router } from 'express'
import moduleController from "../controllers/moduleController.js"
import multer from 'multer'
import userController from '../controllers/userController.js';
import departementController from '../controllers/departementController.js';
import coursController from '../controllers/coursController.js';
import { authorizeRoles, protect } from '../middleware/authMiddleware.js';


const router = Router();
    // upload d'image
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/modules')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})
    
var upload = multer({ storage: storage }).single('image')
 

// authentification routes liste
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', protect, userController.logoutUser)

// modules routes listes
router.get('/get-modules', moduleController.listeModule)
router.post('/add-module', upload, moduleController.ajouterModule)
router.put('/update-module', moduleController.modifierModule)
router.delete('/delete-module/:id', moduleController.supprimerModule)
    
router.get('/', (req, res) => { res.send("L'API d'acceuil") });


// cours routes listes
router.get('/get-courses', coursController.getAllCourses)
router.post('/create-course', coursController.addCourse)
router.get('/get-course/:id', coursController.singleCours)
router.get('/get-course-content/:id', coursController.getCourseContent)
router.get("/meet", coursController.getMeetingId)


// departement routes listes
router.get("/departements", departementController.listeDepartement)
router.post('/add-departement', authorizeRoles('Administrateur'), protect, departementController.ajouterDepartement)

export default router