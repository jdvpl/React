import React,{Fragment} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header 
        titulo="Noticias"
      />
      <div className="container white">
        <Formulario/>
      </div>
    </Fragment>
      
  );
}

export default App;
