import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {borrarProductoAction,obtenerProductoEditar} from '../actions/productoActions';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
    const {nombre,id,precio,cliente,vendedor}=producto;

    const dispatch = useDispatch();
    // confirmar si desea eliminar el producto
    const confirmar=id=>{
        // confirmacion
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "No podras recuperar el producto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
            // pasarlo al action
            dispatch(borrarProductoAction(id));
              
            }
          });

    }
    const history=useHistory();
    // funcion que redirige 
    const redireccionar=producto=>{
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)

    }
    return (  
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td>{cliente}</td>
            <td>{vendedor}</td>
            <td>
                <button 
                    type="button"
                    onClick={()=>redireccionar(producto)}
                    className="btn btn-outline-primary mr-2 "
                >Editar</button>
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