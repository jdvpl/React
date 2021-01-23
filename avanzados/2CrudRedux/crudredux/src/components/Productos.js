import React,{useEffect} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import obtenerProductosAction from '../actions/productoActions';
import Producto from './Producto';

const Productos = () => {
    const dispatch=useDispatch();

    useEffect(() => {
        // cionsultar la api

        const cargarProductos=()=>dispatch(obtenerProductosAction());
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    // obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return ( 
        <div>
            <h2 className="text-center my-5">Listado de Productos</h2>

            {error ? <p className="font-weight-bold text-center alert alert-danger">Eror</p>:null}
            {cargando?<p className="text-center font-weight-bold">Cargando datos.....</p>:null}
            <div className=" table-responsive table-bordered">
            <table className="table table-hover table-bordered">
                <thead className="bg-primary table-dark text-center">
                    <tr>
                        <th scope="col">N°</th> 
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad (Kg)</th>
                        <th scope="col">Total</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Vendedor</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {productos.length===0 ?<tr><td className="mt-3">No hay Productos</td></tr>:(
                        productos.map(producto =>(
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}

                </tbody>
            </table>
            </div>
        </div>
     );
}
 
export default Productos;