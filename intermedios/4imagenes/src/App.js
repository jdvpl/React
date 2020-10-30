import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  const [busqueda,guardarBusqueda]=useState('');
  const [imagenes,guardarImagenes]=useState([]);
  const [paginaactual,guardarPaginaActual]=useState(1);
  const [totalpaginas,guardarTotalPaginas]=useState(1);


  useEffect(()=>{
    
    const ConsultarApi=async()=>{
      if(busqueda==='')return;
    const imganesPorPagina=32;
    const key='18921863-0243b54b936a6edcf62572433';
    const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imganesPorPagina}&page=${paginaactual}`;
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();
    guardarImagenes(resultado.hits);

    // calcular el total de paginas
    const calcularTotalPaginas=Math.ceil(resultado.totalHits/imganesPorPagina);
    guardarTotalPaginas(calcularTotalPaginas);

    // mover pagina hacia arriba
    const jumbotron=document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({behavior: 'smooth'});
    }

    ConsultarApi();

  },[busqueda,paginaactual])
  // definicion de la pagina anterior
  const paginaAnterior=()=>{
    const nuevaPaginaActual=paginaactual-1;
    if(nuevaPaginaActual===0)return;
    guardarPaginaActual(nuevaPaginaActual)
  }
  // pagina siguiente
  const paginaSiguiente=()=>{
    const nuevaPaginaActual=paginaactual+1;
    if(nuevaPaginaActual>totalpaginas) return;
    guardarPaginaActual(nuevaPaginaActual);
    
  }
  return (
   <div className="container">
    <div className="jumbotron">
      <p className="lead text-center">Buscador de imagenes</p>
      <Formulario
        guardarBusqueda={guardarBusqueda}
      />
    </div>
    <div className="row justify-content-center">
      <ListadoImagenes
        imagenes={imagenes}
      />
      {(paginaactual===1)?null:(
        <button
        className="btn btn-info mr-1"
        onClick={paginaAnterior}
         >
        &laquo; Anterior 
      </button>
      )}
      {(paginaactual===totalpaginas)? null :
      (
        <button
      onClick={paginaSiguiente}
        className="btn btn-info">
        Siguiente &raquo;
      </button>
      )}
    </div>
    
   </div>
  );
}

export default App;
