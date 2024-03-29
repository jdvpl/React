import React, { Fragment, useState,useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    // obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext);
    // extrayendo la funcionalidad del formulario
    const {formulario,errorformulario,mostrarFormulario,AgregarProyecto,mostrarError}=proyectosContext;


    const [proyecto,guardarProyecto]=useState({
        nombre:''
    })
    // extrayendo nombre del state proyecto
    const {nombre}=proyecto;
    // funcion para lo que el usuario va escribiendo
    const onChangeProyecto=e=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }
    // cuando el usario de agregar proyecto
    const onSubmitProyecto=e=>{
        e.preventDefault();
        // vlaidar el proyecto
        if(nombre===''){
            mostrarError();
            return;
        }
        // agregar al state
        AgregarProyecto(proyecto);

        // reiniciar el form\
        guardarProyecto({
            nombre:''
        })
        
    }
    // mostrar el formuclacion
    const onClickFormulario =()=>{
        mostrarFormulario();
    }


    return ( 
        <Fragment>
        <button
        type="submit"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
        >
            Nuevo Proyecto
        </button>
           {formulario
           ?
           (
            <form 
            onSubmit={onSubmitProyecto}
            className="formulario-nuevo-proyecto">
                <input 
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
                />
                <input 
                type="submit"
                className="btn-primario btn btn-block"
                value="Agregar Proyecto"
                />
            </form>
           ):
           null}
           {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NuevoProyecto;
