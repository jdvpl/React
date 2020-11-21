
import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,DESCARGA_PRODUCTOS_ERROR,DESCARGA_PRODUCTOS_EXITO} from '../types/index';

// cada reduceres tiene su porpio estate

const initialState={
    productos:[],
    error:null,
    loading:false
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
        case DESCARGA_PRODUCTOS_ERROR:
        return{
            ...state,
            loading:false,
            error:action.payload
        }
        default:
            return state;
    }
}