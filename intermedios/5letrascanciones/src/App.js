import React,{Fragment,useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Biografia from './components/Biografia';

function App() {
  // definir el state
  const [busquedaletra,guardarBusquedaLetra]=useState({})
  // creando el state oara guardar la letra
  const [letra,guardarLetra]=useState('');
  const [biografia,guardarBiografia]=useState({})
  useEffect(()=>{
    if(Object.keys(busquedaletra).length===0)return;

    const consultarApiLetra=async()=>{
      const {artista,cancion}=busquedaletra;
      const url =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra,informacion]=await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarBiografia(informacion.data.artists[0]);
      // guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  },[busquedaletra,biografia])
 
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Biografia
              biografia={biografia}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
