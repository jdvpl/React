import React,{useEffect, useState,Fragment} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Fomulario';
import ListadoDatos from './components/ListadoDatos';



function App() {
  const [genero,guardarGenero]=useState('');
  const [pais,guardarPais]=useState('');
  const [cantidad,guardarCantidad]=useState('');
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

  return (
    <Fragment>
    <Header/>

    <Banner/>

    <Formulario
      guardarGenero={guardarGenero}
      guardarPais={guardarPais}
      guardarCantidad={guardarCantidad}
    />

    <ListadoDatos/>

    <Footer/>
    </Fragment>
    

  );
}

export default App;
