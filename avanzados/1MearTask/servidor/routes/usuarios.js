// rutas para crear usuariose
const express=require('express');
const router=express.Router();

// crea un usuario

// endpoint /api/usuarios
router.post('/', ()=>{
    console.log('creando usuario...')
});
module.exports=router;