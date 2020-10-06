import React,{Fragment} from 'react';

const Cita = ({cita}) => ( 
    <Fragment>
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Edad: <span>{cita.edad} Meses</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
        </div>
    </Fragment>
);
 
export default Cita;