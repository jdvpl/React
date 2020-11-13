// rutas para autenticar usuarios
const express=require('express');
const router=express.Router();
const authController=require('../controllers/authController');
// dependemncia para validar 
const {check} =require('express-validator')

// crea un usuario

// endpoint /api/auth
router.post('/',
    [
        check('email','El correo es obligatorio').isEmail(),
        check('password','La contraseña debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    authController.autenticarUsuario);
module.exports=router;