import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    const tareasContext=useContext(tareaContext);
    const {eliminarTarea}=tareasContext;

    // funcion para eliminar una tarea
    const tareaEliminar=id=>{
        eliminarTarea(id);

    }
    
    return (  
        <li className="tarea sombra"> 
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                ?
                (
                    <button
                        type="button"
                        className="completo"
                        >Completo</button>
                )
                :
                (
                    <button
                        type="button"
                        className="incompleto"
                        >Incompleto</button>
                )

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=>tareaEliminar(tarea.id)}
                >
                Eliminar</button>
            </div>

        </li>
    );
}
 
export default Tarea;