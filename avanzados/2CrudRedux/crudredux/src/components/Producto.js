import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {borrarProductoAction} from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre,id,precio,cliente,vendedor}=producto;

    const dispatch = useDispatch();
    // confirmar si desea eliminar el producto
    const confirmar=id=>{
        console.log('el id es: '+id);
    }
    return (  
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td>{cliente}</td>
            <td>{vendedor}</td>
            <td>
                <Link to={`/productos/editar/${id}`} 
                    className="btn btn-outline-primary mr-2 "
                >Editar</Link>
                <button 
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={()=>confirmar(id)}
                    >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default Producto;