import React from 'react';

const Cotizacion = ({resultado,resultado1}) => {
    if(Object.keys(resultado).length===0 && Object.keys(resultado1).length===0) return null;
    console.log(resultado);
    console.log(resultado1);
    return ( 
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
        </div>
     );
}
 
export default Cotizacion;