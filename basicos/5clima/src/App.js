import React,{Fragment, useState,useEffect} from 'react';
import Clima from './components/Clima';
import Error from './components/Error';
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
// guardar el resultado de la consulta
const [resultado,guardarResultado]=useState({});
// state cuando no hay resultados
const [error,guardarError]=useState(false);

// extrar los datos
const {ciudad,pais}=busqueda;
useEffect(()=>{
  const consultarAPI=async()=>{
    if(consultar){
      const appID='8689f1656e2443008bc9b7a82330f5c6';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
    
    const respuesta=await fetch(url);
    const resultado= await respuesta.json();
    guardarResultado(resultado);
    guardarConsultar(false);
    // para mirar si no hubo resultados en la consulta
    if(resultado.cod==='404'){
      guardarError(true);
    }else{
      guardarError(false);
    }
    }
  }
  consultarAPI();
  // eslint-disable-next-line
},[consultar]);

  let componente;
  if(error){
    componente=<Error mensaje="No hay Resultados por favor verificar el pais y ciudad"/>
  }else{
    componente=<Clima resultado={resultado} img='imagen'/>
  }

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
            {componente}
          </div>
        </div>
      </div>
    </div>
    </Fragment>
      

  );
}

export default App;
