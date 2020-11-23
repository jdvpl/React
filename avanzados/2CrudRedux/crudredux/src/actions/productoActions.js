import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,DESCARGA_PRODUCTOS_ERROR,DESCARGA_PRODUCTOS_EXITO,
    PRODUCTO_ELIMINADO_ERROR,OBTENER_PRODUCTO_ELIMINAR,PRODUCTO_ELIMINADO_EXITO,
    COMENZAR_EDICION,OBTNER_PRODUCTO_EDITAR, PRODUCTO_EDITADO_EXITO, PRODUCTO_EDITADO_ERROR} from '../types/index';
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
            const reultado=await clienteAxios.post('/productos',producto);
            // si todo sale bien actualiza el state

            dispatch(agregarProductoExito(reultado.data));
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
            // si se eliminar mosstrar alerta

            Swal.fire(
                'Eliminado!',
                'Eliminado Correctamente',
                'success'
              )
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
// COLOCAR PRODUCTO EN EL FORM DE EDITAR
export function obtenerProductoEditar(producto){
    return(dispatch)=>{
        dispatch(obtenerProductoEdicion(producto))
    }
}

const obtenerProductoEdicion =producto=>({
    type:OBTNER_PRODUCTO_EDITAR,
    payload:producto
});
// EDITA UN REGISTRO EN LA API
export function editarProducto(producto){
    return async(dispatch)=>{
        dispatch(editar());
        try {
            await clienteAxios.put(`/productos/${producto.id}`,producto);
            dispatch(editarPorductoExito(producto));
            Swal.fire(
                'Correcto',
                'El producto se edito',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(editarProductoError());
        }
    }
}
const editar=()=>({
    type:COMENZAR_EDICION
})
const editarPorductoExito =producto=>({
    type:PRODUCTO_EDITADO_EXITO,
    payload:producto
});

const editarProductoError=()=>({
    type:PRODUCTO_EDITADO_ERROR,
    payload:true
})