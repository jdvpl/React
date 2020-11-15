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

import clienteAxios from '../../config/axios';

const AuthState=props=>{
    const initialState={
        token:localStorage.getItem('token'),
        autenticado:null,
        usuario:null,
        mensaje:null
    }
    const [state,dispatch]=useReducer(authContext,initialState);
    // FUNCIONES

    const registrarUsuario=async datos=>{
        try {
            const respuesta=await clienteAxios.post('/api/usuarios',datos);
            console.log(respuesta);
            dispatch({
                type:REGISTRO_EXISTOSO
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type:REGISTRO_ERROR

            })
        }
    }
    return(
        <authContext.Provider
            value={{
                token:state.token,
                autenticado:state.autenticado,
                usuario:state.usuario,
                mensaje:state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState;