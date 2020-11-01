import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FROMULARIO_PROYECTO} from '../../types';


const ProyectoState=props=>{
    const initailState={
        formulario:false
    }
    // disparch para ejecutar las acciones
    const [state,dispatch]=useReducer(proyectoReducer,initailState)
    // serie de funcioens para el crud
    // para mostar el formulario
    const mostrarFormulario=()=>{
        dispatch({
            type:FROMULARIO_PROYECTO
        })
    }

    return(
        <ProyectoContext.Provider
        value={{
            formulario: state.formulario
        }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}
export default ProyectoState;