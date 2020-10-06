import React,{Fragment} from 'react';

const Pregunta = () => {
    return (  
        <Fragment>
            <h2>Coloca tu presupuestos</h2>

            <form>

                <input
                    type="number"
                    className="u-full-width"
                />
            </form>
        </Fragment>
        
    );
}
 
export default Pregunta;