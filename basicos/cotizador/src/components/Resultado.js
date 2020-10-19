import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const Mensaje=styled.p`
    background-color:rgba(128,230,200,0.3);
    margin-top:2rem;
    padding:1rem;
    text-align:center;
`;
const ResultadoCotizacion=styled.div`
    text-align:center;
    padding:.5rem;
    border:1px solid #262626;
    background-color:rgba(128,230,200,0.5);
    margin-top:1rem;
    position: relative;
`;
const TextoInsectado=styled.p`
    color:#0764cb;
    padding:1rem;
    text-transform:uppercase;
    font-weight:bold;
    margin:0;
    text-align:center;
    font-size:1.5rem;
`;

const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion===0)?<Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        :(
            <ResultadoCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter:500,exit:500}}
                    >
                        <TextoInsectado>El total es: ${cotizacion}</TextoInsectado>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
     );
}
Resultado.propTypes={
    cotizacion:PropTypes.number.isRequired
}
export default Resultado;