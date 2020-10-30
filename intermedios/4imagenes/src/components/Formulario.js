import React, { useState } from 'react';

const Formulario = () => {
    const [termino,guardarTermino]=useState('');
    const buscarImagenes=e=>{
        e.preventDefault();
    }
    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="buscar imagen"
                        onChange={e=>guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-outline-danger btn-lg"
                        placeholder="Buscar"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;