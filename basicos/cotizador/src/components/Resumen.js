import React,{Fragment} from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';

const ContenedorRresumen=styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838f;
    color:#fff;
    margin-top:1rem;
`;

const Resumen = ({datos}) => {
    // extraer fatos
    const {marca,year,plan}=datos;
    if(marca==='' || year===''|| plan==='')return null;
    return (  
        <ContenedorRresumen>
        <h2>Resumen de cotizacion</h2>
        <ul>
            <li>Marca: {primerMayuscula(marca)}</li>
            <li>Plan: {plan}</li>
            <li>Año: {year}</li>
        </ul>
        </ContenedorRresumen>
    );
}
 
export default Resumen;