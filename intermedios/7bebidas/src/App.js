import React from 'react';
import Formulario from './components/Formulario';
import Header from "./components/Header";
import CategoriasProvider from './context/CategoriaContext';

function App() {
  return (
    <CategoriasProvider >
      <Header/>
      <div className="mt-5 container">
        <div className="row">
          <Formulario/>
          
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
