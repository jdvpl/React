import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO} from '../types/index';

// crear nuecos productos
export function crearNuevoProductoAction(producto){
    return(dispatch)=>{
        dispatch(
            agregarProducto()
        );
    }
}
const agregarProducto=()=>({
    type:AGREGAR_PRODUCTO
})