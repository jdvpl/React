import React,{Fragment,useEffect, useState} from 'react';
import Formulario from './components/Formulario';
function App() {
  const [busquedaletra,guardarBusquedaLetra]=useState({})
  useEffect(()=>{
    if(Object.keys(busquedaletra).length===0)return;
  },[busquedaletra])
 
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
