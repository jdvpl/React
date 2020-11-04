import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,ELIMINAR_PROYECTO } from '../../types';


const TareaState=props=>{
    const initialState={
        tareas:[
            {id:1,nombre:'Crear Proyecto',estado:true,proyectoId:2},
            {id:2,nombre:'npx create-react-app cliente',estado:false,proyectoId:2},
            {id:3,nombre:'Instalar el routerDom',estado:true,proyectoId:2},
            {id:4,nombre:'npm react-router-dom',estado:false,proyectoId:2},
            {id:5,nombre:'Instalando node',estado:true,proyectoId:1},
            {id:6,nombre:'npm install -g create-react-app',estado:false,proyectoId:1},
            {id:7,nombre:'Instalar mongoCliente',estado:true,proyectoId:3},
            {id:8,nombre:'Ejecutar Mongod',estado:false,proyectoId:3},  
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
    // eliminar una tarea por id
    const eliminarTarea=id=>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:id
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errortarea:state.errortarea,
                ObtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;