// rutas para crear usuariose
const express=require('express');
const router=express.Router();
const usuarioController=require('../controllers/usuarioController');

// crea un usuario

// endpoint /api/usuarios
router.post('/', usuarioController.crearUsuario);
module.exports=router;