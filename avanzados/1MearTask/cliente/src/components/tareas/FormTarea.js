import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // extraer si un poryecto esta activo
     const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context

     const {proyecto}=proyectosContext;
      // obtener la funcion del context de tarea
    const tareasContext=useContext(tareaContext);
    const {errortarea,agregarTarea,validarTarea}=tareasContext;
     // state del fromulario
     const [tarea,guardarTarea]=useState({
         nombre:''
     })
    //  aplicar destructurin para extraer la tarea
    const {nombre}=tarea;
    //  funcion para saber lo qeu el usuario va escribiendo
    const handleChange=e=>{
        guardarTarea({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }
    //  si no hay proyecto seleccionado
     if(!proyecto)return null;
    const [proyectoActual]=proyecto;

    const onSubmit=e=>{
        e.preventDefault();

        // validar
        if(nombre.trim()===''){
            validarTarea(true)
            return;
        }

        // agregar una nueva tarea al state de tareas
        tarea.proyectoId=proyectoActual.id;
        tarea.estado=false;
        agregarTarea(tarea);

        // reiniciar el form
        guardarTarea({
            nombre:''
        })

    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        placeholder="Nombre Tarea..."
                        value="Agregar Tarea"
                    />
                </div>
            </form>
            {errortarea?<p className="mensaje error">Debes colocar un nombre de una tarea</p>:null}

        </div>
     );
}
 
export default FormTarea;