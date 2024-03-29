import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition,TransitionGroup}from 'react-transition-group';


const ListadoTareas = () => {

     // extraer proyectos del state incial
    const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context
    const {proyecto,eliminarProyecto}=proyectosContext;
    // obtener las tareas del protyecto
    const tareasContext=useContext(tareaContext);
    const {tareasproyecto}=tareasContext;

    if(!proyecto)return <h2>Selecciona un proyecto</h2>;
       
    const [proyectoActual]=proyecto;

    // elimiar el proyecto
    const onClickEliminar=()=>{
        eliminarProyecto(proyectoActual._id);
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length===0
                ?(
                    <li className="tareas"><p>No Hay tareas</p></li>
                ):
                <TransitionGroup>
                {tareasproyecto.map(tarea=>(
                    <CSSTransition
                    key={tarea._id}
                    timeout={200}
                    classNames="tarea">
                    <Tarea
                        
                        tarea={tarea}
                    />
                    </CSSTransition>
                ))}
                </TransitionGroup>

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