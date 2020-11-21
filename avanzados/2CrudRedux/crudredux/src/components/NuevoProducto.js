import React, { useState } from 'react';
// funciones de redux
import {useDispatch,useSelector} from 'react-redux';
import {crearNuevoProductoAction} from '../actions/productoActions';

const NuevoProducto = ({history}) => {
    const [nombre,setNombre]=useState('');
    const [precio, setPrecio] = useState(0);
    // utilizar usedispatj y te crea una funcion
    const dispatch=useDispatch();

    // mandar a llmar la funcion del action para inplemnetarla
    const agregarProducto=producto=>dispatch(crearNuevoProductoAction(producto))

    // acceder al state del store
    const cargando=useSelector(state=>state.productos.loading);
    const error=useSelector(state=>state.productos.error);
    // cuando el usuario haga submit en el boton
    const agregarNUevoProducto=e=>{
        e.preventDefault();
        // validar formulario
        if(nombre.trim()===''||precio<=0){
            return;
        }

        // sino hay errores

        // crear el nuievo productos
        agregarProducto({
            nombre,
            precio
        });
        // reidreccionar al inicio
        history.push('/');
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
                                    value={nombre}
                                    onChange={e=>setNombre(e.target.value)}
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
                                    onChange={e=>setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-capitaliza d-block w-100">
                                    Agregar
                                </button>
                        </form>
                        {cargando?<p>Cargando...</p>:null}
                        {error? <p className="alert alert-danger p-2 mt-4 text-center">Hubo un error</p>:null}
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default NuevoProducto;