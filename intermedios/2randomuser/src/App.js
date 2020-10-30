import React,{useEffect, useState,Fragment} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Fomulario';
import ListadoDatos from './components/ListadoDatos';
import Error from './components/Error';

function App() {
  const [genero,guardarGenero]=useState('');
  const [pais,guardarPais]=useState('');
  const [cantidad,guardarCantidad]=useState('');

  const [error,guardarError]=useState(false);
  const [datos,guardarDatos]=useState([]);

  useEffect(()=>{
    const ConsultarApi=async()=>{
      const url=`https://randomuser.me/api/?results=${cantidad}&nat=${pais}&gender=${genero}`;
      const respuesta=await fetch(url);
      const resultado=await respuesta.json();
      guardarDatos(resultado.results);
    }
    ConsultarApi()
  },[genero,pais,cantidad])

  let componente;
  if(error){
    componente=<Error mensaje="No hay Resultados por favor verificar el pais y ciudad"/>
  }else{
    componente=<ListadoDatos datos={datos}/>
  }
  return (
    <Fragment>
    <Header/>

    <Banner/>

    <Formulario
      datos={datos}
      guardarGenero={guardarGenero}
      guardarPais={guardarPais}
      guardarCantidad={guardarCantidad}
      guardarDatos={guardarDatos}
    />

    {componente}  

    <Footer/>
    </Fragment>
    

  );
}

export default App;
