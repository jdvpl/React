import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {
    const [proyecto,guardarProyecto]=useState({
        nombre:''
    })
    
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
