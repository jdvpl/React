import React,{useState} from 'react';
const usePais = (stateInicial, opciones) => {
    const [state,actualizarState]=useState(stateInicial)
    const SelectPais=()=>(
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
    // ! lo que va a retornar el formulario
    return [state,SelectPais];
}
 
export default usePais;