import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,
    ELIMINAR_TAREA,TAREA_ACTUAL,
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
        try {
            const respuesta=await clienteAxios.get('/api/tareas',{params:{proyecto}})
            dispatch({
                type:TAREAS_PROYECTO,
                payload:respuesta.data.tareas
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
    const eliminarTarea=async (id,proyecto)=>{
        try {
            await clienteAxios.delete(`/api/tareas/${id}`,{params:{proyecto}});
            dispatch({
                type:ELIMINAR_TAREA,
                payload:id
            })
        } catch (error) {
            console.log(error);
        }
    }
    

    // funcion la tarea para edicion

    const guardarTareaActual=tarea=>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }

    // FUNCION PARA ACTUALIZAR UNA TAREA
    const actualizarTarea=async tarea=>{

       try {
           const resultado=await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea);
           console.log(resultado);
        dispatch({
            type:ACTUALIZAR_TAREA,
            payload:resultado.data.tarea
        })
       } catch (error) {
           console.log(error);
       }
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