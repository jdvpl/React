import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,
    ELIMINAR_TAREA ,ESTADO_TAREA,TAREA_ACTUAL,
    ACTUALIZAR_TAREA,LIMPIAR_TAREA} from '../../types';
    import clienteAxios from '../../config/axios';



const TareaState=props=>{
    const initialState={
        tareasproyecto:[],
        errortarea:false,
        tareaseleccionada:null

    }
    // creadno el sidpatch y state
    const [state,dispatch]=useReducer(TareaReducer,initialState);

    // FUNCIONES

    // OBTENER TAREAS DE UN PROYECTO
    const ObtenerTareas=async proyecto=>{
        console.log(proyecto)
        try {
            const respuesta=await clienteAxios.get('/api/tareas',{params:{proyecto}})
            console.log(respuesta);
            dispatch({
                type:TAREAS_PROYECTO,
                payload:proyecto
            })
        } catch (error) {
            console.log(error)
        }
    }
    // AGREGAR UNA NUEVA TAREA
    const agregarTarea=async tarea=>{
        console.log(tarea);
        try {
            const resultado=await clienteAxios.post('/api/tareas',tarea);
            console.log(resultado);
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
        } catch (error) {
            console.log(error);
        }
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