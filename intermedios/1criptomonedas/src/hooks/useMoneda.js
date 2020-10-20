import React,{Fragment,useState} from 'react';

const useMoneda=(label,stateInicial,opciones)=>{
    // state de nuestro custom hook
    const [state,actualizarState]=useState(stateInicial)

    const seleccionar=()=>(
        <Fragment>
        <label>{label}</label>
        <select >
            <option value="">Seleccione</option>
            {opciones.map(opcion=>(
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
            ))}
        </select>
    </Fragment>
    );
    // retornar state interfaz que modifica el state
    return[state,seleccionar,actualizarState];
}

export default useMoneda;



