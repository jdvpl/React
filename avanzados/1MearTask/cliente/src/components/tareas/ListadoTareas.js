import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

     // extraer proyectos del state incial
    const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context
    const {proyecto,eliminarProyecto}=proyectosContext;
    if(!proyecto)return <h2>Selecciona un proyecto</h2>;
       
    const [proyectoActual]=proyecto;

    const tareasPoyecto=[]
    // elimiar el proyecto
    const onClickEliminar=()=>{
        eliminarProyecto(proyectoActual.id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasPoyecto.length===0
                ?Fragment(
                    <li className="tareas"><p>No Hay tareas</p></li>
                ):
                tareasPoyecto.map(tarea=>(
                    <Tarea
                        tarea={tarea}
                    />
                ))

                }
            </ul>
            <button
                type="button"
                onClick={onClickEliminar}
                className="btn btn-eliminar"
                >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;