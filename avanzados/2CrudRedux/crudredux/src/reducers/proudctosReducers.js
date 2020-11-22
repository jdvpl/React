
import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,DESCARGA_PRODUCTOS_ERROR,DESCARGA_PRODUCTOS_EXITO,
    PRODUCTO_ELIMINADO_ERROR,OBTENER_PRODUCTO_ELIMINAR,PRODUCTO_ELIMINADO_EXITO} from '../types/index';

// cada reduceres tiene su porpio estate

const initialState={
    productos:[],
    error:null,
    loading:false,
    productoEliminar:null
}
export default function(state=initialState,action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
        return{
            ...state,
            loading:action.payload
        }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos:[...state.productos,action.payload]
            }
        case GUARDAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case COMENZAR_DESCARGA_PRODUCTOS:
            return{
                ...state,
                loading:action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading:false,
                error:null,
                productos:action.payload
            }
        case PRODUCTO_ELIMINADO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        return{
            ...state,
            loading:false,
            error:action.payload
        }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoEliminar:action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos:state.productos.filter(producto=>producto.id !==state.productoEliminar),
                productoEliminar:null
            }
        default:
            return state;
    }
}