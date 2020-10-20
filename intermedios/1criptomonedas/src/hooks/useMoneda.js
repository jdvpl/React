import React,{Fragment,useState} from 'react';

const useMoneda=()=>{
    // state de nuestro custom hook
    const [state,actualizarState]=useState('')
    
    const seleccionar=()=>(
        <Fragment>
        <label>mondad</label>
        <select >
            <option value="">- Seleccione -</option>
            <option value="COP">Peso Mexicano</option>
            <option value="MXN">Peso Mexicano</option>
        </select>
    </Fragment>
    );
    // retornar state interfaz que modifica el state
    return[state,seleccionar,actualizarState];
}

export default useMoneda;



