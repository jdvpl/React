import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #d90000;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    border-radius:10px;
    letter-spacing:1px;
`;
const Error = ({mensaje}) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
    )
}
 
export default Error;