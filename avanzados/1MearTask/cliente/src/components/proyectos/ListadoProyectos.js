import React, { useContext,useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import {CSSTransition,TransitionGroup}from 'react-transition-group';


const ListadoProyectos = () => {
    // extraer proyectos del state incial
    const proyectosContext = useContext(ProyectoContext);
    // validar si proyectos tiene contenido
    const {proyectos,obtenerProyectos}=proyectosContext;

    // obtener proyectos cuando cargar el componente
    useEffect(() => {
        obtenerProyectos();
        
    }, []);

    // revisar si proyectos tiene contenido
    if(proyectos.length===0)return <p>No hay Proyectos, crea uno</p>;

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map(proyecto=>(
                <CSSTransition
                classNames="proyecto"
                key={proyecto.id}
                timeout={200}
                >
                <Proyecto
                    
                    proyecto={proyecto}
                />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;