import React from 'react';
import styled from '@emotion/styled';

const ContenedotHeader=styled.header`
    background-color:#d21000;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedotHeader>
        <h1>{titulo}</h1>
        </ContenedotHeader>
     );
}
 
export default Header;