import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FROMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,PROYECTO_ACTUAL,ELIMINAR_PROYECTO,PROYECTO_ERROR} from '../../types';
import clienteAxios from '../../config/axios';


const ProyectoState=props=>{

   
    const initailState={
        proyectos:[],
        formulario:false,
        errorformulario:false,
        proyecto:null,
        mensaje:null
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

    const obtenerProyectos=async()=>{
        try {
            const resultado=await clienteAxios.get('/api/proyectos');

            dispatch({
                type:OBTENER_PROYECTOS,
                payload:resultado.data.proyectos
            })  
        } catch (error) {
            const alerta={
                msg:'Hubo un error',
                categoria:'alerta-error'
            }
           dispatch({
               type:PROYECTO_ERROR,
               payload:alerta
           })
        
        }
    }
    // Agregar nuevo proyecto
    const AgregarProyecto=async proyecto=>{
        try {
            const resultado=await clienteAxios.post('/api/proyectos',proyecto);
            dispatch({
                type:AGREGAR_PROYECTO,
                payload:resultado.data
            })
        } catch (error) {
            const alerta={
                msg:'Hubo un error',
                categoria:'alerta-error'
            }
           dispatch({
               type:PROYECTO_ERROR,
               payload:alerta
           })
        }
        
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
    const eliminarProyecto=async proyectoId=>{
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        });
        } catch (error) {
            const alerta={
                msg:'Hubo un error',
                categoria:'alerta-error'
            }
           dispatch({
               type:PROYECTO_ERROR,
               payload:alerta
           })
        }
    }

    return(
        <ProyectoContext.Provider
        value={{
            proyectos:state.proyectos,
            formulario: state.formulario,
            errorformulario:state.errorformulario,
            proyecto:state.proyecto,
            mensaje:state.mensaje,
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