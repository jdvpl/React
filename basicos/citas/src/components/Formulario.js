import React,{Fragment,useState} from 'react';


const Formulario = () => {
    // creando el state de cita
    const [cita,actualizarCita]=useState({
        mascota:'',
        edad:0,
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });
    // funcion que se ejecuta cada vez que el usuario escribe en unb input

    const actualizarState=e=>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }
    // extrayendo los valores
    const {mascota,edad,propietario,fecha,hora,sintomas}=cita;

    return (  
        <Fragment>

            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Edad</label>
                <input 
                    type="number"
                    name="edad"
                    className="u-full-width"
                    placeholder="Edad"
                    onChange={actualizarState}
                    value={edad}
                />
                 <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                 <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >
                
                </textarea>
                <button 
                    type="submit"
                    className="u-full-width button-outline button-primary"
                >
                    Agregar Cita
                </button>
            </form>

        </Fragment>
    );
}
 
export default Formulario;