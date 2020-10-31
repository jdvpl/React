import React, { useState } from 'react';

const Formulario = () => {
    const [busqueda,guardarBusqueda]=useState({
        artista:'',
        cancion:''
    })
    //? state para mostrar lso que esta escribiendo
    const actializarState=e=>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    // extraer los valores
    const {artista,cancion}=busqueda;
    // consultar las apis
    const buscarInformacion=e=>{
        e.preventDefault()
        if(artista.trim()===''||cancion.trim()===''){
            
        }
    }
    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        onChange={actializarState}
                                        value="artista"
                                        />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Cancion</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Cancion"
                                        onChange={actializarState}
                                        value="cancion"
                                        />
                                </div>
                                </div>
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary float-right">
                                Buscar
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;