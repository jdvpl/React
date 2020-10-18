import React,{useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';

const Contenedor=styled.div`
  max-width:600px;
  margin: auto;

`;
const ContenedorFormulario=styled.div`
  background-color:#fff;
  padding:3rem;
`;

function App() {
  const [resumen,guardarResumen]=useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  })
  // extraer datos
const {datos}=resumen;
  return (
    <div className="App">
      <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />
    
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />  
        <Resumen
          datos={datos}
        />
      </ContenedorFormulario>
      </Contenedor>
    </div>
  );
}

export default App;
