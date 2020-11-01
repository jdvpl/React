import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';


const ListadoProyectos = () => {
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos}=proyectosContext;
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