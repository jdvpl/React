import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA } from '../../types';


const TareaState=props=>{
    const initialState={
        tareas:[
            {nombre:'Crear Proyecto',estado:true,proyectoId:2},
            {nombre:'npx create-react-app cliente',estado:false,proyectoId:2},
            {nombre:'Instalar el routerDom',estado:true,proyectoId:2},
            {nombre:'npm react-router-dom',estado:false,proyectoId:2},
            {nombre:'Instalando node',estado:true,proyectoId:1},
            {nombre:'npm install -g create-react-app',estado:false,proyectoId:1},
            {nombre:'Instalar mongoCliente',estado:true,proyectoId:3},
            {nombre:'Ejecutar Mongod',estado:false,proyectoId:3},  
        ],
        tareasproyecto:null,
        errortarea:false

    }
    // creadno el sidpatch y state
    const [state,dispatch]=useReducer(TareaReducer,initialState);

    // FUNCIONES

    // OBTENER TAREAS DE UN PROYECTO
    const ObtenerTareas=proyectoId=>{
        dispatch({
            type:TAREAS_PROYECTO,
            payload:proyectoId
        })
    }
    // AGREGAR UNA NUEVA TAREA
    const agregarTarea=tarea=>{
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }
    const validarTarea=()=>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errortarea:state.errortarea,
                ObtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;