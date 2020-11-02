import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

       // extraer proyectos del state incial
       const proyectosContext = useContext(proyectoContext);
       // validar si proyectos tiene contenido
       const {proyecto}=proyectosContext;

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
                tareasPoyecto.map(tarea=>(
                    <Tarea
                        tarea={tarea}
                    />
                ))

                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;