import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  const [busqueda,guardarBusqueda]=useState('');

  useEffect(()=>{
    if(busqueda==='')return;
    
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
