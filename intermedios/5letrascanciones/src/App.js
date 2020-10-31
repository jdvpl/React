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

  const [info, guardarInfo] = useState({});
  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0 ) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

    }
    consultarApiLetra();
  }, [busquedaletra, info]);
 
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Biografia
              info={info}
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
