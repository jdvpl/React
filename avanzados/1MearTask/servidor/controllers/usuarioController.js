const { request } = require('express');
const Usuario=require('../models/Usuario');

exports.crearUsuario= async(req,res)=>{
    // extraer email, usuario y password
    const {email,username,password}=req.body;
    try {
        // validacion de que el usuario sea unico



        let usuario =await Usuario.findOne({email,username});

        if(usuario){
            return res.status(400).json({msg: 'El usuario o correo ya existe'});
        }

        // crear el nuevo usuario
        usuario=new Usuario(req.body);

        // guiardar usuario
        await usuario.save();

        // mensaje de confirmacion
        res.json({msg: 'Usuario creado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(400).send('Eror kisamado');
    }
}