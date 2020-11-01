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
    return ( 
        <Fragment>
        <button
        type="submit"
        className="btn btn-block btn-primario"
        >
            Nuevo Proyecto
        </button>
            <form className="formulario-nuevo-proyecto">
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
