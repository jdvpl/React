import React from 'react';
import Header from './components/Header';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
function App() {
  return (
    <Router>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Productos}/>
                <Route exact path="/productos/nuevo" component={NuevoProducto}/>
              </Switch>
            </div>
    </Router>

  );
}

export default App;
