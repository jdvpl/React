import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState=props=>{
    const initialState={
        tareas:[
            {nombre:'Crear Proyecto',estado:true},
            {nombre:'npx create-react-app cliente',estado:false},
            {nombre:'Instalar el routerDom',estado:true},
            {nombre:'npm react-router-dom',estado:false}, 
        ],

    }
    // creadno el sidpatch y state
    const [state,dispatch]=useReducer(TareaReducer,initialState);

    return(
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;