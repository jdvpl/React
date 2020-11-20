import React from 'react';
import {crearNuevoProductoAction} from '../actions/productoActions';

const NuevoProducto = () => {

    // cuando el usuario haga submit en el boton
    const agregarNUevoProducto=e=>{
        e.preventDefault();
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wight-bold">Agregar Producto</h2>

                        <form
                            onSubmit={agregarNUevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio"
                                    name="precio"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-capitaliza d-block w-100">
                                    Agregar
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default NuevoProducto;