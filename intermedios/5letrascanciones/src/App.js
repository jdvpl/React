import React,{Fragment,useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';

function App() {
  // definir el state
  const [busquedaletra,guardarBusquedaLetra]=useState({})
  // creando el state oara guardar la letra
  const [letra,guardarLetra]=useState('');
  useEffect(()=>{
    if(Object.keys(busquedaletra).length===0)return;

    const consultarApiLetra=async()=>{
      const {artista,cancion}=busquedaletra;
      const url =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado=await axios(url);
      guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  },[busquedaletra])
 
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            Biografia
          </div>
          <div className="col-md-6">
            <Cancion/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
