import React,{useState} from 'react';

const useGenero = (stateInicial,opciones) => {
    const [state,actualizarState]=useState(stateInicial)
    const SelectGenero=()=>(
        <select 
        className="browser-default"
        value={state}
        onChange={e=>actualizarState(e.target.value)}
        >
        {opciones.map(opcion=>(
            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))}

        </select>
    );
   return [state,SelectGenero];
}

export default useGenero;