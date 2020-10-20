import React,{Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {
  const [busqueda,guardarBusqueda]=useState({
    ciudad:'',
    pais:''
});
// hacer la consulta
const [consultar,guardarConsultar]=useEffect(false);

// extrar los datos
const {ciudad,pais}=busqueda;
useEffect(()=>{
  console.log(ciudad)
},[ciudad,pais])

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
