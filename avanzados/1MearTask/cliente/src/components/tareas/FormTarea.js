import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // extraer si un poryecto esta activo
     const proyectosContext = useContext(proyectoContext);
    // extraer el proyecto del context

     const {proyecto}=proyectosContext;
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


        // pasar la validarciobn


        // agregar una nueva tarea al state de tareas

        // reiniciar el form

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
        </div>
     );
}
 
export default FormTarea;