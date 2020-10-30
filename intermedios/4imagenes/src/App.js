import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  const [busqueda,guardarBusqueda]=useState('');

  useEffect(()=>{
    
    const ConsultarApi=async()=>{
      if(busqueda==='')return;
    const imganesPorPagina=30;
    const key='18921863-0243b54b936a6edcf62572433';
    const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imganesPorPagina}`;
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();
    guardarBusqueda(resultado.hits);
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
    
   </div>
  );
}

export default App;
