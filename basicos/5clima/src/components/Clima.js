import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const IMG = styled.div`
    margin:auto;
    text-align:center;

    img{
        width:25%;
    }
`
const Clima = ({resultado,img}) => {
    // extraer los valores
    const {name,main,clouds}=resultado;
    const{weather}=resultado;
    if(!name) return null;
    // grados kelvin
    const kelvin=273.15
    return ( 
        <div className="card-panel fondo col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                {parseFloat( main.temp-kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <IMG>
                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} title={img+' '+weather[0].icon+' '+name} />
                </IMG>
                <p>Temperatura Maxima:
                {parseFloat( main.temp_max-kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p >Temperatura Minina:
                {parseFloat( main.temp_min-kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Humedad: 
                {main.humidity} <span>g/m3</span>
                </p>
                <p>Nubes:
                    {clouds.all}%
                </p>
                <p>clima: 
                    {weather[0].main}
                </p>
                <p>{weather[0].description}</p> 
            </div>

        </div>
    );
}
Clima.propTypes={
    resultado:PropTypes.object.isRequired,
    img:PropTypes.string.isRequired
}
export default Clima;