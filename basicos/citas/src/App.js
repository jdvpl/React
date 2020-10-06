import React,{Fragment,useState} from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


function App() {
// arreglo de citas
  const [citas,guardarCitas]=useState([

  ])
  // funcion que tome las citas actuales y agregue la nueva

  const crearCita=cita=>{
    guardarCitas([
      ...citas,
      cita
    ]) 

  }
  // funcion que elimina una cita por su ID
  const eliminarCita=id=>{
    const nuevasCitas=citas.filter(cita =>cita.id !==id);
    guardarCitas(nuevasCitas);
  }
  // mensaje condicional
  console.log(citas.length);

  return (
    <Fragment>
    <h1 >Administrador de pacientes</h1>
      <div className="container">

      
      <div className="row">
        <div className="one-half column">

          <Formulario
            crearCita={crearCita}
          />
          
        </div>

          
        <div className="one-half column">
          <h2>Administra tus cistas</h2>
          {citas.map(cita=>(
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default App;
