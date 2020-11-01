import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {
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

        // agregar al state

        // reinivar el form
        
    }
    return ( 
        <Fragment>
        <button
        type="submit"
        className="btn btn-block btn-primario"
        >
            Nuevo Proyecto
        </button>
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
        </Fragment>
     );
}
 
export default NuevoProyecto;
