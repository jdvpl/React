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
    const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imganesPorPagina}`;
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();
    guardarImagenes(resultado.hits);

    // calcular el total de paginas
    const calcularTotalPaginas=Math.ceil(resultado.totalHits/imganesPorPagina);
    guardarTotalPaginas(calcularTotalPaginas);
    }

    ConsultarApi();

  },[busqueda])
  // definicion de la pagina anterior
  const paginaAnterior=()=>{
    const nuevaPaginaActual=paginaactual-1;
    if(nuevaPaginaActual===0)return;
    guardarPaginaActual(nuevaPaginaActual)
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
      <button
        className="btn btn-info mr-1"
        onClick={paginaAnterior}
         >
        &laquo; Anterior 
      </button>
      <button
        className="btn btn-info">
        Siguiente &raquo;
      </button>
    </div>
    
   </div>
  );
}

export default App;
