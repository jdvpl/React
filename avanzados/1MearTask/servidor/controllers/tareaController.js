const Tarea = require("../models/Tarea");
const Proyecto = require("../models/Poryecto");
const { validationResult } = require("express-validator");
// crear una nueva tarea

exports.crearTarea = async (req, res) => {
  // revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    // extraer el proyecto y comprobar si existe
    const { proyecto } = req.body;
    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      return res.status(404).json({ msg: "Poryecto no encontrado" });
    }
    // revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }
    // creamos la tarea
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// obtienes las tareas por poryecto
exports.OntenerTarea = async (req, res) => {
  try {
    // extraer el proyecto y comprobar si existe
    const { proyecto } = req.query;
    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      return res.status(404).json({ msg: "Poryecto no encontrado" });
    }
    // revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }
    // obtener las tareas por proyecto

    const tareas = await Tarea.find({ proyecto });
    res.json({ tareas });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// actualizar tarea
exports.ActualizarTarea = async (req, res) => {
  try {
    // extraer el proyecto y comprobar si existe
    const { proyecto, nombre, estado } = req.body;
    // revisar si la tarea existe o no
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ msg: "No existe tarea" });
    }

    // extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }
    // crear un objeto con la neuva infio
    const nuevaTarea = {};
    if (nombre) {
      nuevaTarea.nombre = nombre;
    }
    if (estado) {
      nuevaTarea.estado = estado;
    }
    // guardar la tarea
    tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, nuevaTarea, {
      new: true,
    });
    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// elimina una tarea
exports.EliminarTarea = async (req, res) => {
  try {
    // extraer el proyecto y comprobar si existe
    const { proyecto } = req.body;
    // revisar si la tarea existe o no
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ msg: "No existe tarea" });
    }

    // extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }
    // eliminar
    await Tarea.findOneAndRemove({_id:req.params.id});
    res.json({msg:'Tarea Eliminada'});

    res.json({ tarea });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
