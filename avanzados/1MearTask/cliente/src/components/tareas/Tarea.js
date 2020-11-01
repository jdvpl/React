import React from 'react';

const Tarea = ({tarea}) => {
    return (  
        <li className="tarea sombra"> 
            <p>{tarea.nombre}</p>
            
        </li>
    );
}
 
export default Tarea;