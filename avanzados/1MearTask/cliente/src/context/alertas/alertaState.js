import React,{useReducer} from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import { MOSTRAR_ALERTA,OCULTAR_ALERTA } from '../../types/index';

const AlertaState=props=>{
    const initailState={
        alerta:null
    }
    
    return(
        <alertaContext.Provider

        >
            {props.children}
        </alertaContext.Provider>
    )
}
export default AlertaState;