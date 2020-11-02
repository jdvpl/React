import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {
    // state del proyecto
    const proyectosContext = useContext(ProyectoContext);
    // extrayendo la funcionalidad del formulario
    const {proyectoActual}=proyectosContext;


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>proyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     ); 
}
 
export default Proyecto;