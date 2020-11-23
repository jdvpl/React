import { combineReducers } from 'redux';
import alertaReducer from './alertaReducer';
import proudctosReducers from './proudctosReducers';

export default combineReducers({
    productos:proudctosReducers,
    alerta:alertaReducer
})
