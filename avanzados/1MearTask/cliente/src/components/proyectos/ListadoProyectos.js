import React, { useContext,useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import {CSSTransition,TransitionGroup}from 'react-transition-group';
import AlertaContext from '../../context/alertas/alertaContext';


const ListadoProyectos = () => {
    // extraer proyectos del state incial
    const proyectosContext = useContext(ProyectoContext);
    // validar si proyectos tiene contenido
    const {mensaje,proyectos,obtenerProyectos}=proyectosContext;
    const alertaContext=useContext(AlertaContext);
    const {alerta,MostrarAlerta}=alertaContext;

    // obtener proyectos cuando cargar el componente
    useEffect(() => {
        // si hay un error
        if(mensaje){
            MostrarAlerta(mensaje.msg,mensaje.categoria);
        }
        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si proyectos tiene contenido
    if(proyectos.length===0)return <p>No hay Proyectos, crea uno</p>;

    return ( 
        <ul className="listado-proyectos">
        {alerta? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> :null }
            <TransitionGroup>
            {proyectos.map(proyecto=>(
                <CSSTransition
                classNames="proyecto"
                key={proyecto._id}
                timeout={500}
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