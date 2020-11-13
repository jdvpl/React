const Usuario=require('../models/Usuario');
const bcrypts=require('bcryptjs');
const {validationResult}=require('express-validator');
const jwt =require('jsonwebtoken');

exports.autenticarUsuario=async(req,res)=>{
    // valdiar si hay errores
    const errores =validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }

    const {email,password}=req.body;
    try {
        // revisar que el email exitas
        let usuario=await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:'El usuario no existe'});
        }
    } catch (error) {
        console.log(error);
    }
}