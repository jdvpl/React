import React from 'react';
import {Link} from 'react-router-dom'
const Producto = ({producto}) => {
    const {nombre,id,precio,cliente,vendedor}=producto;
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
            </td>
        </tr>
    );
}
 
export default Producto;