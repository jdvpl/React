import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO} from '../types/index';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
// crear nuecos productos
export function crearNuevoProductoAction(producto){
    return async(dispatch)=>{
        dispatch(
            agregarProducto()
        );
        // para agregar a la base de datos
        try {
            // insertar en la api
            await clienteAxios.post('/productos',producto);
            // si todo sale bien actualiza el state

            dispatch(agregarProductoExito(producto));
            // alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            // cambia el state
            dispatch(agregarProductoError(true));

            // alerta de error
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'No se pudieron agregar los datos a la base de datos'
            })
        }
    }
}
const agregarProducto=()=>({
    type:AGREGAR_PRODUCTO,
    payload:true
})

// si el prodducto se guarda en la base de datos
const agregarProductoExito=producto=>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:producto
})



// si hay un error
const agregarProductoError=estado=>({
    type:GUARDAR_PRODUCTO_ERROR,
    payload:estado
})