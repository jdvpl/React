import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {
    // state del proyecto
    const proyectosContext = useContext(ProyectoContextContext);
    // extrayendo la funcionalidad del formulario
    const {proyectoActual}=proyectosContext;


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {proyecto.nombre}
            </button>
        </li>
     ); 
}
 
export default Proyecto;