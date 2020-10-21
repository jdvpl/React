import React from 'react';
import styled from '@emotion/styled';

const IMG = styled.div`
    margin-top:1.5rem;
    img{
        width:30%;
    }

    
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length===0) return null;
    console.log(resultado);

    return ( 
        <div>
        <IMG>
            <img src={`https://www.cryptocompare.com${resultado.IMAGEURL}`}/>
        </IMG>
            <p>El precio de <span>1 {resultado.FROMSYMBOL}</span> es: <span>{resultado.PRICE}</span></p>
            <p>El precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>El precio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span></p>
        </div>
     );
}
 
export default Cotizacion;