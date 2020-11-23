const { MOSTAR_ALERTA,OCULTAR_ALERTA } = require("../types");


const initalState={
    alerta:null
}
// eslint-disable-next-line 
export default function(state=initalState,action){
    switch(action.type){
        case MOSTAR_ALERTA:
            return{
                ...state,
                alerta:action.payload
            }
        case OCULTAR_ALERTA:
            return{
                ...state,
                alerta:null
            }

        default:
            return state;
    }
}