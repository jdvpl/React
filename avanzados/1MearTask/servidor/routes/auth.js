// rutas para autenticar usuarios
const express=require('express');
const router=express.Router();

// dependemncia para validar 
const {check} =require('express-validator')

// crea un usuario

// endpoint /api/usuarios
router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('username','El usuario es obligatorio').not().isEmpty(),
        check('email','El correo es obligatorio').isEmail(),
        check('password','La contraseña debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    );
module.exports=router;