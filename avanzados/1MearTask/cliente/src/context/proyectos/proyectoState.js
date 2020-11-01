import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FROMULARIO_PROYECTO} from '../../types';


const ProyectoState=props=>{
    const initailState={
        proyectos=[
            {id:1,nombre:'Kakaroto'},
            {id:2,nombre:'Vegueta'},
            {id:3,nombre:'Lucifer'},
            {id:4,nombre:'React'},
            {id:5,nombre:'MEARN'}
        ],
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
            formulario: state.formulario,
            mostrarFormulario
        }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}
export default ProyectoState;