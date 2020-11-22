import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,DESCARGA_PRODUCTOS_ERROR,DESCARGA_PRODUCTOS_EXITO,
    PRODUCTO_ELIMINADO_ERROR,OBTENER_PRODUCTO_ELIMINAR,PRODUCTO_ELIMINADO_EXITO} from '../types/index';
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
});
// FUNCON QUE obtiene los porductos
export default function obtenerProductosAction(){
    return async(dispatch)=>{
        dispatch(descargarProductos());

        try {
            const respuesta=await clienteAxios.get('/productos');
            dispatch(descargaProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error)
            dispatch(descargaProductosError())
        }
    }
}
const descargarProductos =()=>({
    type:COMENZAR_DESCARGA_PRODUCTOS,
    payload:true
})
const descargaProductosExitosa=productos=>({
    type:DESCARGA_PRODUCTOS_EXITO,
    payload:productos
});

const descargaProductosError=()=>({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload:true
})
// selecciona y elimina un producto
export function borrarProductoAction(id){
    return async(dispatch)=>{
        dispatch(obtenerProductosEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(elimianrProductoExito());
        } catch (error) {
            console.log(error);
            dispatch(elimianrProductoError());
        }
    }
}
const obtenerProductosEliminar =id=>({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload:id
});

const elimianrProductoExito=()=>({
    type:PRODUCTO_ELIMINADO_EXITO
})

const elimianrProductoError=()=>({
    type:PRODUCTO_ELIMINADO_ERROR,
    payload:true
})