import React,{Fragment,useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  const [categoria,guardarCategoria]=useState('');
  const [pais,guardarPais]=useState('');
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
