import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  const [categoria,guardarCategoria]=useState('');
  const [pais,guardarPais]=useState('');
  const [noticias,guardarNoticias]=useState([])

  useEffect(()=>{
    const ConsultarApi=async()=>{
      const url=`http://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=c2785e0903dd448e8ba84959e90a22fa`;
      const respuesta=await fetch(url);
      const noticias=await respuesta.json();
      guardarNoticias(noticias.articles);
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
        />
      </div>
    </Fragment>
      
  );
}

export default App;
