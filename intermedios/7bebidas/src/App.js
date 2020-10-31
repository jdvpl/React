import React, { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from "./components/Header";

function App() {
  return (
    <Fragment >
      <Header/>
      <div className="mt-5 container">
        <div className="row">
          <Formulario/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
