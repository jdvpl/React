import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';


const ListadoProyectos = () => {
    // extraer proyectos del state incial
    const proyectosContext = useContext(ProyectoContext);
    // validar si proyectos tiene contenido
    const {proyectos}=proyectosContext;
    
    if(proyectos.length===0)return null;
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto=>(
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;