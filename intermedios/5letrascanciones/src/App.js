import React,{Fragment,useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

function App() {
  const [busquedaletra,guardarBusquedaLetra]=useState({})
  useEffect(()=>{
    if(Object.keys(busquedaletra).length===0)return;

    const consultarApiLetra=async()=>{
      const {artista,letra}=busquedaletra;
      const url =`https://api.lyrics.ovh/v1/${artista}/${letra}`;
      const resultado=axios(url);
    }
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
