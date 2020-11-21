import React,{useEffect} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import obtenerProductosAction from '../actions/productoActions';

const Productos = () => {
    const dispatch=useDispatch();

    useEffect(() => {
        // cionsultar la api

        const cargarProductos=()=>dispatch(obtenerProductosAction());
        cargarProductos();
    }, []);

    return ( 
        <div>
            <h2 className="text-center my-5">Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Vendedor</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
     );
}
 
export default Productos;