import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FROMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTO} from '../../types';
import uuid from 'uuid/dist/v4';


const ProyectoState=props=>{

    const proyectos=[
    
        {id:1,nombre:'Kakaroto'},
        {id:2,nombre:'Vegueta'},
        {id:3,nombre:'Lucifer'},
        {id:4,nombre:'React'},
        {id:5,nombre:'MEARN'},
        {id:6,nombre:'Configuracion MongoDB'},
    ]
    
    const initailState={
        proyectos:[],
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
    // obtener los poryectos como si fuera con una base de datos

    const obtenerProyectos=()=>{
        dispatch({
            type:OBTENER_PROYECTOS,
            payload:proyectos
        })  
    }
    // Agregar nuevo proyecto
    const AgregarProyecto=proyecto=>{
        proyecto.id=uuid();
    }

    return(
        <ProyectoContext.Provider
        value={{
            proyectos:state.proyectos,
            formulario: state.formulario,
            mostrarFormulario,
            obtenerProyectos,
            AgregarProyecto
        }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}
export default ProyectoState;