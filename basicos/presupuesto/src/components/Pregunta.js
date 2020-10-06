import React,{Fragment} from 'react';

const Pregunta = () => {
    return (  
        <Fragment>
            <h2>presupuesto</h2>

            <form>

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupusto"
                />
            </form>
        </Fragment>
        
    );
}
 
export default Pregunta;