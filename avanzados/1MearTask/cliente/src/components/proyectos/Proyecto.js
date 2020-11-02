import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {
    // state del proyecto
    const proyectosContext = useContext(ProyectoContext);
    // extrayendo la funcionalidad del formulario
    const {proyectoActual}=proyectosContext;
    // obtener la funcion del context de tarea
    const tareasContext=useContext(tareaContext);
    const {ObtenerTareas}=tareasContext;
    // funcion para agregar el proyecto actual
    const SeleccionarProyecto=id=>{
        proyectoActual(id); //fijar un proyecto actual
        ObtenerTareas(id); //filtar las tareas cuando se de clicik
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>SeleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     ); 
}
 
export default Proyecto;