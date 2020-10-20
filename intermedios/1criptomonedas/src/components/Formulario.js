import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`
const Formulario = () => {
    // state del listado de criptomonedad
    const [listadocripto,guardarCriptomonedas]=useState([]);
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'COP', nombre: 'Peso Colombiano' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'AUD', nombre: 'Dólar Australiano' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'CAD', nombre: 'Dolar Canadiense' },
        { codigo: 'PEN', nombre: 'Sol Peruano' },
        { codigo: 'JPY', nombre: 'Yen Japones' },
        { codigo: 'RUB', nombre: 'Rublo Ruso' },
        { codigo: 'VEB', nombre: 'Bolívar Venezolano' },

    ];
    // utilizar usemoneda
    const [moneda,SelectMonedas]=useMoneda('Elige tu moneda','',MONEDAS);

    const [criptomoneda,SelectCripto]=useCriptomoneda('Elige tu Criptomoneda','',listadocripto);
    // ejecutar el llamado a la API

    useEffect(()=>{
        const ConsultarAPI=async()=>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            // consultarlo con axios
            const resultado=await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        ConsultarAPI();

    },[]);
    return ( 
        <form>
            <SelectMonedas/>
            <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;