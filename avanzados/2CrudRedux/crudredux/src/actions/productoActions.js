import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO} from '../types/index';

// crear nuecos productos
export function crearNuevoProductoAction(producto){
    return(dispatch)=>{
        dispatch(
            agregarProducto()
        );
        // para agregar a la base de datos
        try {
            dispatch(agregarProductoExito(producto));

        } catch (error) {
            dispatch(agregarProductoError(true));
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
const agregarProductoError=()=>({
    type:GUARDAR_PRODUCTO_ERROR,
    payload:estado
})