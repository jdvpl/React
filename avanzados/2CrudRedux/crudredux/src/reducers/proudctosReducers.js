import {AGREGAR_PRODUCTO,GUARDAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO} from '../types/index';
// cada reduceres tiene su porpio estate

const initialState={
    productos:[],
    error:null,
    loading:false
}

export default function(state=initialState,action){
    switch(action.type){
        
        default:
            return state;
    }
}