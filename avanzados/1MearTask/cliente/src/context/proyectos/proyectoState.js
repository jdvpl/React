import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';


const proyectoState=props=>{
    const initailState={
        formulario:false
    }
    // disparch para ejecutar las acciones
    cont [sate,dispatch]=useReducer(proyectoReducer,initailState)
    // serie de funcioens para el crud

    return(
        <ProyectoContext.Provider
        value={{
            formulario:state.formulario
        }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}