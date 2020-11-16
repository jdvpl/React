import React from 'react';
import Header from './components/Header';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
            <Header/>
            <div>
              <Switch>
                <Route exact path="/" component={}/>
              </Switch>
            </div>
    </Router>

  );
}

export default App;
