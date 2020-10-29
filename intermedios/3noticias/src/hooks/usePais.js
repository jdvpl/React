import React,{useState} from 'react';
const usePais = (stateInicial, opciones) => {
    const [state,actualizarState]=useState('')
    const SelectPais=()=>(
        <select className="browser-default">
            <option value="">Seleccione Pais</option>
        </select>
    );
    // ! lo que va a retornar el formulario
    return [state,SelectPais];
}
 
export default usePais;