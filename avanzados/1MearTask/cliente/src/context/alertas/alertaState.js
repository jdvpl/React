import React,{useReducer} from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';
import { MOSTRAR_ALERTA,OCULTAR_ALERTA } from '../../types/index';

const AlertaState=props=>{
    const initailState={
        alerta:null
    }
    const [state,dispatch]=useReducer(alertaReducer,initailState);
    const MostrarAlerta=(msg,categoria)=>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria
            }
        });
        setTimeout(() => {
            dispatch({
                type:OCULTAR_ALERTA
            })
        }, 5000);
    }
    return(
        <alertaContext.Provider
            value={{
                alerta:state.alerta,
                MostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}
export default AlertaState;