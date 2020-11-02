import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FROMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,PROYECTO_ACTUAL,ELIMINAR_PROYECTO} from '../../types';
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
        formulario:false,
        errorformulario:false,
        proyecto:null
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
        // agregar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload:proyecto
        })
    }
    // VALIDA EL FORMULARIO POR ERRORES
    const mostrarError=()=>{
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }
    // seleccionar el proyecto cuando 
    const proyectoActual=proyectoId=>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload:proyectoId
        })
    }
    // eliminar un poryecto 
    const eliminarProyecto=proyectoId=>{
        dispatch({
            type:ELIMINAR_PROYECTO,
        payload:proyectoId
        })
    }

    return(
        <ProyectoContext.Provider
        value={{
            proyectos:state.proyectos,
            formulario: state.formulario,
            errorformulario:state.errorformulario,
            proyecto:state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            AgregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}
export default ProyectoState;  