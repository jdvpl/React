import React from 'react';
import styled from '@emotion/styled';

const Img = styled.div`
    margin:auto;
    text-align:center;
    
    img{
        width:30%;
        margin-top:-50px;
    }
    
`
const Imagen = () => {
    return ( 
        <Img>
            <img src="./img/logo.png" alt="" />
        </Img>
     );
}

export default Imagen;