import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

// archivo principal de donde le pones los elementos al index.html
ReactDOM.render( < React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('App')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();