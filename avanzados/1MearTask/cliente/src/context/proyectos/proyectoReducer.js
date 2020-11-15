import {FROMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,PROYECTO_ACTUAL,ELIMINAR_PROYECTO} from '../../types';

const proyectoReducer= (state,action)=>{
    switch(action.type){
        case FROMULARIO_PROYECTO:
            return {
                ...state,
                formulario:true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos:action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos:[...state.proyectos,action.payload],
                formulario:false,
                errorformulario:false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario:true
            }
        case PROYECTO_ACTUAL:
        return{
            ...state,
            proyecto:state.proyectos.filter(proyecto=>proyecto._id===action.payload)
        }
        case ELIMINAR_PROYECTO:
            console.log(action.payload);
        return{
            ...state,
            proyectos:state.proyectos.filter(proyecto=>proyecto._id!==action.payload),
            proyecto:null

        }
        default:
            return state;
    }
}
export default proyectoReducer;