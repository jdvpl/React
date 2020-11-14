const e = require('express');
const Proyecto=require('../models/Poryecto');

exports.crearProyecto=async(req,res)=>{
    try {
        const proyecto=new Proyecto(req.body);

        // gaurdar el creador via jwt
        proyecto.creador=req.usuario.id;

        // guardamos el proyectof
        proyecto.save();
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}