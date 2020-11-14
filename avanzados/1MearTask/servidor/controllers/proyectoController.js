const Proyecto=require('../models/Poryecto');
const {validationResult}=require('express-validator');
exports.crearProyecto=async(req,res)=>{
    // revisar si hay errores
    const errores =validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }



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
// Obtiene los proyectos del usuarioActual
exports.ObtenerProyectos=async(req,res)=>{
    try {
        const proyectos=await Proyecto.find({creador:req.usuario.id}).sort({creado:-1});
        res.json({proyectos});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Actualiza un proyecto
exports.ActualizarProyecto=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}