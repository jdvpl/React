import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  const [busqueda,guardarBusqueda]=useState('');
  const [imagenes,guardarImagenes]=useState([]);

  useEffect(()=>{
    
    const ConsultarApi=async()=>{
      if(busqueda==='')return;
    const imganesPorPagina=32;
    const key='18921863-0243b54b936a6edcf62572433';
    const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imganesPorPagina}`;
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();
    guardarImagenes(resultado.hits);
    }

    ConsultarApi();

  },[busqueda])
  return (
   <div className="container">
    <div className="jumbotron">
      <p className="lead text-center">Buscador de imagenes</p>
      <Formulario
        guardarBusqueda={guardarBusqueda}
      />
    </div>
    <div className="row justify-content-center">
      <ListadoImagenes
        imagenes={imagenes}
      />
    </div>
    
   </div>
  );
}

export default App;
