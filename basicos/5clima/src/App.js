import React,{Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {
  // state del form
  const [busqueda,guardarBusqueda]=useState({
    ciudad:'',
    pais:''
});
// hacer la consulta
const [consultar,guardarConsultar]=useState(false);

// extrar los datos
const {ciudad,pais}=busqueda;
useEffect(()=>{
  console.log(ciudad)
},[consultar])

  return (
    <Fragment>
    <Header
      titulo='Clima JDVPL'
    />
    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </div>
          <div className="col m6 s12">
            2
          </div>
        </div>
      </div>
    </div>
    </Fragment>
      

  );
}

export default App;
