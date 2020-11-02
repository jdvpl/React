import React, { useContext,useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';


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