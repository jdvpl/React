import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {borrarProductoAction,obtenerProductoEditar} from '../actions/productoActions';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
    const {nombre,id,precio,cliente,vendedor,cantidad,fecha}=producto;

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
    const total=Number(precio)*Number(cantidad);
    return (  
        <tr className="text-center">
            <td>{id}</td>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td>{cantidad}</td>
            <td>{total}</td>
            <td>{cliente}</td>
            <td>{vendedor}</td>
            <td>{fecha}</td>
            <td>
                <button 
                    type="button"
                    onClick={()=>redireccionar(producto)}
                    className="btn btn-outline-primary mb-1 ml-1"
                ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
                <button 
                    type="button"
                    className="btn btn-outline-danger mb-1 ml-1"
                    onClick={()=>confirmar(id)}
                    >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>
                </button>
            </td>
        </tr>
    );
}
 
export default Producto;