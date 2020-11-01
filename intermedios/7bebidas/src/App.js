import React from 'react';
import Formulario from './components/Formulario';
import Header from "./components/Header";
import ListaRecetas from './components/ListaRecetas';
import CategoriasProvider from './context/CategoriaContext';
import ModalProvider from './context/ModalContext';
import RecetasProvider from './context/RecetasContext';

function App() {
  return (
    <CategoriasProvider >
    <RecetasProvider>
    <ModalProvider>

      <Header/>
      <div className="mt-5 container">
        <div className="row">
          <Formulario/>
          
        </div>
        <ListaRecetas/>
      </div>
            
    </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
