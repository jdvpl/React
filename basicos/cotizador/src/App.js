import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const Contenedor=styled.div`
  max-width:600px;
  margin:0 auto;

`;
const ContenedorFormulario=styled.div`
  background-color:#fff;
  padding:3rem;
`;

function App() {
  return (
    <div className="App">
      <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />
      </Contenedor>

      <ContenedorFormulario>
        <Formulario/>
      </ContenedorFormulario>
     
    </div>
  );
}

export default App;
