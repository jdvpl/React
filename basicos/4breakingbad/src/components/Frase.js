import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContenedorFrase = styled.div`
    margin-top:3rem;
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fee6a7;
    max-width:60%;

    
    @media (max-width: 1000px) {
        margin-top: 1rem;
        max-width: 92%;
        padding:1.6rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
     
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
            <h1>"{frase.quote}"</h1>
            <p>-{frase.author} </p>
        </ContenedorFrase>
    );
}
Frase.propTypes={
    frase:PropTypes.object.isRequired
}
export default Frase;