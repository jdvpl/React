import React,{Fragment,useEffect, useState} from 'react';
import Formulario from './components/Formulario';
function App() {
  const [busquedaletra,guardarBusquedaLetra]=useState({})

 
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
