import React,{useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear,calcularMarca,obtenerPlan} from '../helper';

const Campo=styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
    `;
const Label=styled.label`
    flex:0 0 100px;
`;
const Select=styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border:1px solid #e1e1e1;
    --webkit-appearance:none;

`;
const Button=styled.button`
    background-color:#00838F;
    font-size:16px;
    width:100%;
    padding:1rem;
    color:white;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition:background-color .3s ease;
    margin-top:1.5rem;

    &:hover{
        background-color:#26c6da;
        cursor: pointer;
    }
`;
const InputRadio=styled.input`
    margin:0 1rem;
`;
const Eror=styled.div`
    background-color:rebeccapurple;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom:2rem;
`;
const Lol=styled.div`
    margin:auto;
    padding:1%;
`;
const Formulario = ({guardarResumen}) => {
    const[datos,guardarDatos]=useState({
        marca:'',
        year:'',
        plan:''
    });
    // para el error

    const [error,guardarError]=useState(false);

    // extraer los valores
    const {marca,year,plan}=datos;

    // leer los datos del formulario y colocarlos en el state
    const obtenerInformacion =e=>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario presiona submit
    
    const cotizarSeguro=e=>{
        e.preventDefault();
        if(marca.trim()==='' || year.trim()==='' || plan.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // ibtener la diferencia de años
        let resultado =300000;
        const diferencia=obtenerDiferenciaYear(year);
        
        // por cada año hay que restar el 3%
        resultado-=((diferencia*3)*resultado)/100

        // calculando el precion segun la marca

        resultado=calcularMarca(marca)*resultado;

        // basico aumenta 20%

        // completo 50%
        const incrementoPlan=obtenerPlan(plan);
        resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
        console.log(resultado)

        guardarResumen({
            cotizacion:resultado,
            datos
        })
    }
    return (  
        <>
        <Lol>
        {error ? <Eror>Todos los campos son obligatorios</Eror> :null}
        </Lol>
        
        <form 
            onSubmit={cotizarSeguro}
            >
            
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}>
                    <option value="">Seleccione</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                    <option value="africano">Africano</option>
                    <option value="oceanico">Oceanico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">Seleccione</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label> 
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan==="basico"}
                    onChange={obtenerInformacion}   
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan==="completo"}
                    onChange={obtenerInformacion}
                />Completo

            </Campo>
            <Button type="submit">Cotizar</Button>
        </form>
        </>
    );
}
 
export default Formulario;