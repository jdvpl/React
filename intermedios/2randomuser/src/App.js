import React,{useEffect, useState,Fragment} from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Error from './components/Error';
import Formulario from './components/Fomulario';
import Datos from './components/Datos';
import axios from 'axios';



function App() {
  const [busqueda,guardarBusqueda]=useState({
    ciudad:'',
    pais:'',
    genero:''
});
// hacer la consulta
const [consultar,guardarConsultar]=useState(false);
// guardar el resultado de la consulta
const [resultado,guardarResultado]=useState({});
// state cuando no hay resultados
const [error,guardarError]=useState(false);

// extrar los datos
const {ciudad,pais,genero}=busqueda;
useEffect(()=>{
  const consultarAPI=async()=>{
    if(consultar){

    const url=`https://randomuser.me/api/?results=${ciudad}&nat=${pais}&gender=${genero}`;
    
    const resultado=await axios.get(url);

    guardarResultado(resultado.data.results[0]);
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
    componente=<Datos resultado={resultado} />
  }
  return (
    <Fragment>
    <Header/>

    <Banner/>

    <Formulario
      busqueda={busqueda}
      guardarBusqueda={guardarBusqueda}
      guardarConsultar={guardarConsultar}
    />

            {componente}

    <Footer/>
    </Fragment>
    

  );
}

export default App;
