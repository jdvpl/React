import React,{Fragment,useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    background-color:#ffffff;
    display:block;
    border-radius: 10px;
    font-size: 1.2rem;
`
const usePais=(label,stateInicial,opciones)=>{
    // state de nuestro custom hook
    const [state,actualizarState]=useState(stateInicial)

    const seleccionar=()=>(
        <Fragment>
        <Label>{label}</Label>
        <Select 
            onChange={e=>actualizarState(e.target.value)}
            value={state}
        >
            <option value="">Seleccione Pais</option>
            {opciones.map(opcion=>(
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
            ))}
        </Select>
    </Fragment>
    );
    // retornar state interfaz que modifica el state
    return[state,seleccionar,actualizarState];
}

export default usePais;



