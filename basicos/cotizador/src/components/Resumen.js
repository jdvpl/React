import React from 'react';

const Resumen = ({datos}) => {
    // extraer fatos
    const {marca,year,plan}=datos;
    if(marca==='' || year===''|| plan==='')return null;
    return (  
        <h2>Resumen de cotizacion</h2>
    );
}
 
export default Resumen;