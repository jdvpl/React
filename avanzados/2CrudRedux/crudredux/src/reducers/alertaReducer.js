const { MOSTAR_ALERTA,OCULTAR_ALERTA } = require("../types");


const initalState={
    alerta:null
}
export default function(state=initalState,action){
    switch(action.type){
        case MOSTAR_ALERTA:
            return{
                ...state,
                alerta:action.payload
            }


        default:
            return state;
    }
}