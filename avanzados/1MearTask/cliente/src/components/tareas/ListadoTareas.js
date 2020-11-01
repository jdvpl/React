import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasPoyecto=[
        {nombre:'Crear Proyecto',estado:true},
        {nombre:'npx create-react-app cliente',estado:false},
        {nombre:'Instalar el routerDom',estado:true},
        {nombre:'npm react-router-dom',estado:false},
    ]
    return ( 
        <Fragment>
            <h2>Proyecto: MERN</h2>
            <ul className="listado-tareas">
                {tareasPoyecto.length===0
                ?Fragment(
                    <li className="tareas"><p>No Hay tareas</p></li>
                ):
                {tareasPoyecto.map(tarea=>(
                    <Tarea
                        tarea={tarea}
                    />
                ))}

                }
            </ul>
        </Fragment>
     );
}
 
export default ListadoTareas;