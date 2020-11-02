import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState=props=>{
    const initialState={
        tareas:[],

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