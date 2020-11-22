import React from 'react';
import {useDispatch,useSelector} from 'react-redux'

const EditarProducto = () => {

    // producto a editar
    const producto = useSelector(state => state.productos.productoeditar);
    if(!producto) return null;
    const {nombre,precio,cliente,vendedor,id}=producto;
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wight-bold">Editar Producto</h2>

                        <form>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio"
                                    name="precio"
                                    value={precio}
                                />
                            </div>
                            <div className="form-group">
                                <label>Cliente</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="cliente"
                                    name="cliente"
                                    value={cliente}
                                />
                                 </div>
                                <div className="form-group">
                                <label>Vendedor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="vendedor"
                                    name="vendedor"
                                    value={vendedor}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-capitaliza d-block w-100">
                                    Guardar
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;