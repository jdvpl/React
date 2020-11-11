import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,
     ELIMINAR_TAREA ,ESTADO_TAREA,TAREA_ACTUAL,
     ACTUALIZAR_TAREA,LIMPIAR_TAREA} from '../../types';
     import uuid from 'uuid/dist/v4';


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
        errortarea:false,
        tareaseleccionada:null

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
        tarea.id=uuid();
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
            type:ELIMINAR_TAREA,
            payload:id
        })
    }
    // cambia el estado de cada tarea
    const cambiarEstadoTarea=tarea=>{
        dispatch({
            type:ESTADO_TAREA,
            payload:tarea
        })
    }

    // funcion la tarea para edicion

    const guardarTareaActual=tarea=>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }

    // FUNCION PARA ACTUALIZAR UNA TAREA
    const actualizarTarea=tarea=>{
        dispatch({
            type:ACTUALIZAR_TAREA,
            payload:tarea
        })
    }
    // elimininar la tarea seleccionada
    const limpiarTarea=()=>{
        dispatch({
            type:LIMPIAR_TAREA
        })
    }
    return(
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errortarea:state.errortarea,
                tareaseleccionada:state.tareaseleccionada,
                ObtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;