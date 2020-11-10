import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {
    // extraer si un poryecto esta activo
    const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context
     const {proyecto}=proyectosContext;

    const tareasContext=useContext(tareaContext);
    const {eliminarTarea,ObtenerTareas,cambiarEstadoTarea}=tareasContext;
    // extraer el proyecto
    const [proyectoActual]=proyecto;

    // funcion para eliminar una tarea
    const tareaEliminar=id=>{
        eliminarTarea(id);
        ObtenerTareas(proyectoActual.id);

    }
    // funcion que modifica el estado de las tareas
    const cammbiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado=false;
        }else{
            tarea.estado=true;
        }
        cambiarEstadoTarea(tarea);
    }
    
    return (  
        <li className="tarea sombra"> 
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                ?
                (
                    <button
                        type="button"
                        className="completo"
                        onClick={()=>cambiarEstado(tarea)}
                        >Completo</button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={()=>cambiarEstado(tarea)}
                        className="incompleto"
                        >Incompleto</button>
                )

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=>tareaEliminar(tarea.id)}
                >
                Eliminar</button>
            </div>

        </li>
    );
}
 
export default Tarea;