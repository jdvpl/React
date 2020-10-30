import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="buscar imagen"
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