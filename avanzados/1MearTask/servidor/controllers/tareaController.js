const Tarea=require('../models/Tarea');
const Proyecto=require('../models/Poryecto');
const {validationResult}=require('express-validator');
// crear una nueva tarea

exports.crearTarea=async(req,res)=>{
    // revisar si hay errores
    const errores =validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    // extraer el proyecto y comprobar si existe
    const {proyecto}=req.body;
    try {
        const proyecto=await Proyecto.findById(proyecto);
        if(!proyecto){
            return res.status(404).json({msg:'Poryecto no encontrado'});

        }
        // revisar si el proyecto actual pertenece al usuario autenticado
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }


}