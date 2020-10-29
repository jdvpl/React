import React, { useState } from 'react';

//? stateInicial es para que muestre las noticias al inicial la pagina por defecto

const UseSelect = (stateInicial,opciones) => {
    const [state,actualizarState]=useState(stateInicial);
    const SelectNoticias=()=>(
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
    //! lo que va retornar en el formulario
    return[state,SelectNoticias];
}
 
export default UseSelect;