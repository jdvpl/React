import React,{Fragment} from 'react';
import { revisarPreupuesto} from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto,restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
            <div className={revisarPreupuesto(presupuesto,restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default ControlPresupuesto;