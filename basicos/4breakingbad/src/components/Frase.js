import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContenedorFrase = styled.div`
    margin-top:6rem;
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:60%;

    
    @media (max-width: 1000px) {
        margin-top: 1rem;
        max-width: 92%;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 4rem;
            color: black;
            position: absolute;
            left: 2rem;
            top: -1rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({frase}) => {
    return (  
        <ContenedorFrase>
            <h1>{frase.quote} </h1>
            <p>- {frase.author} </p>
        </ContenedorFrase>
    );
}
Frase.propTypes={
    frase:PropTypes.object.isRequired
}
export default Frase;