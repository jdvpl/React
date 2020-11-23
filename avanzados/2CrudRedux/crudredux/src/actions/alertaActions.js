const { OCULTAR_ALERTA,MOSTAR_ALERTA } = require("../types");

// muestra alerta
export function mostrarAlerta(alerta){
    return(dispatch)=>{
        dispatch(mostrarAlertaError(alerta))
    }
}
const mostrarAlertaError=alerta=>({
    type:MOSTAR_ALERTA,
    payload:alerta
})