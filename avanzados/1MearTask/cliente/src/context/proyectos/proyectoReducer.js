import {FROMULARIO_PROYECTO} from '../../types';

export default (state,action)=>{
    switch(action.type){
        case FROMULARIO_PROYECTO:
            return {
                ...state,
                formulario:true
            }
        default:
            return state;
    }
}