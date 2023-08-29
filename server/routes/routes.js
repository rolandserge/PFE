const express = require('express');
const router = express.Router();
const User = require('../models/user');
const moduleController = require('../controllers/moduleController');
const multer = require('multer');
const { response } = require('../app');

// upload d'image
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

var upload = multer({
    storage: storage,
}).single('image')

// Insert an user into database route
router.post('/add-user', (req, res) => {
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        fonction: req.body.fonction
        // image: req.files.filename image insert bd
    })
    user.save((err) => {
        if(err) {
            res.json({message: err.message, type: 'danger'})
        }
    })
})

router.post('/add-module', moduleController.ajouterModule)
    

router.get('/', (req, res) => {
    res.send("L'API d'acceuil");
});

router.get('/users', (req, res) => {
    res.send("Tous les users");
});

module.exports = router