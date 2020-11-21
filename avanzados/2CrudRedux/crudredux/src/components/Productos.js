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
    }, []);

    // obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error)

    return ( 
        <div>
            <h2 className="text-center my-5">Listado de Productos</h2>
            {error ? <p className="font-weight-bold text-center alert alert-danger">Eror</p>:null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">N°</th> 
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Vendedor</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length===0?'No hay Productos':(
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
     );
}
 
export default Productos;