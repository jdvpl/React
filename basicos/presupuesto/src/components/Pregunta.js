import React,{Fragment,useState} from 'react';

const Pregunta = () => {
    // definiendo el state
    const [cantidad,guardarCantidad]=useState(0);

    // funcion que leer el presupuesto
    const definirPresupuesto =e=>{
       guardarCantidad(parseInt(e.target.value,10))
    }
    // submit para definir el presupuesto
    const agregarPresupuesto=e=>{
        e.preventDefault(); //para que no cargue la pagina 
    }
    return (  
        <Fragment>
            <h2>Ingrese Presupuesto</h2>

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
 
export default Pregunta;