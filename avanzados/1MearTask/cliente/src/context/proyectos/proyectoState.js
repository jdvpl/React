import React, { useReducer } from 'react';
import proyectoReducer from './proyectoReducer';


const proyectoState=props=>{
    const initailState={
        nuevoProyecto:false
    }
    // disparch para ejecutar las acciones
    cont [sate,dispatch]=useReducer(proyectoReducer,initailState)
}