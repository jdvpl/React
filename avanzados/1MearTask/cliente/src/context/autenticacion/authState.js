import React,{useReducer} from 'react';
import {
    REGISTRO_EXISTOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
  } from '../../types';
import authContext from './authContext';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState=props=>{
    const initialState={
        token:localStorage.getItem('token'),
        autenticado:null,
        usuario:null,
        mensjae:null
    }
    const [state,dispatch]=useReducer(authContext,initialState);
    return(

    )
}
export default AuthState;