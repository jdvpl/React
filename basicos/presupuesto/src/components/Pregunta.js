import React,{Fragment,useState} from 'react';

const Pregunta = () => {
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

    }
    return (  
        <Fragment>
            <h2>Ingrese Presupuesto</h2>
            {error}

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