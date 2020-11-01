import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';


const ProyectoState=props=>{
    const initailState={
        formulario:false
    }
    // disparch para ejecutar las acciones
    const [state,dispatch]=useReducer(proyectoReducer,initailState)
    // serie de funcioens para el crud

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