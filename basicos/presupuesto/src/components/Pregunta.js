import React,{Fragment,useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarRestante,guardarPresupuesto,actualizarPregunta}) => {
    // definiendo el state
    const [cantidad,guardarCantidad]=useState(0);

    // funcion que leer el presupuesto
    const definirPresupuesto =e=>{
       guardarCantidad(parseInt(e.target.value,10))
    }
    const [error,guardarError]=useState(false)
    // submit para definir el presupuesto
    const agregarPresupuesto=e=>{
        e.preventDefault(); //para que no cargue la pagina 

        // validar
        if(cantidad<1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)

    }
    return (  
        <Fragment>
            <h2>Ingrese Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form onSubmit={agregarPresupuesto}>

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
        
    );
}

Pregunta.propTypes={
    guardarPresupuesto:PropTypes.func.isRequired,
    guardarRestante:PropTypes.func.isRequired,
    actualizarPregunta:PropTypes.func.isRequired,

}
export default Pregunta;