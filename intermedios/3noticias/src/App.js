import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  const [categoria,guardarCategoria]=useState('');
  const [pais,guardarPais]=useState('');
  const [noticias,guardarNoticias]=useState([]);

  useEffect(()=>{
    const ConsultarApi=async()=>{
      const apiID='360caaa42c2144f49dbae842f84d09ae';
      const url=`http://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${apiID}`;
      const respuesta=await fetch(url);
      const noticia=await respuesta.json();
      guardarNoticias(noticia.articles);
    } 
    ConsultarApi()
  },[categoria,pais])
  return (
    <Fragment>
      <Header 
        titulo="Noticias"
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
          guardarPais={guardarPais}
          pais={pais}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
      
  );
}

export default App;
