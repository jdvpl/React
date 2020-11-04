import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {
    // extraer si un poryecto esta activo
    const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context
     const {proyecto}=proyectosContext;

    const tareasContext=useContext(tareaContext);
    const {eliminarTarea,ObtenerTareas}=tareasContext;
    // extraer el proyecto
    const [proyectoActual]=proyecto;

    // funcion para eliminar una tarea
    const tareaEliminar=id=>{
        eliminarTarea(id);
        ObtenerTareas(proyectoActual.id);

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
                        >Completo</button>
                )
                :
                (
                    <button
                        type="button"
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