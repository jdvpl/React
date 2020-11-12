const { request } = require('express');
const Usuario=require('../models/Usuario');

exports.crearUsuario= async(req,res)=>{
    try {
        let usuario;
        // crear el nuevo usuario
        usuario=new Usuario(req.body);

        // guiardar usuario
        await usuario.save();

        // mensaje de confirmacion
        res.send('Usuario insertado');
    } catch (error) {
        console.log(error);
        res.status(400).send('Eror kisamado');
    }
}