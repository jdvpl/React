import React,{useReducer} from 'react';
import {REGISTRO_EXITOSO,REGISTRO_ERROR,OBTENER_USUARIO,LOGIN_EXITOSO,
LOGIN_ERROR,CERRAR_SESION,} from '../../types';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import tokenAuth from '../../config/token';

import clienteAxios from '../../config/axios';

const AuthState=props=>{
    const initialState={
        token:localStorage.getItem('token'),
        autenticado:null,
        usuario:null,
        mensaje:null,
        cargando:true
    }
    const [state,dispatch]=useReducer(AuthReducer,initialState);
    // FUNCIONES

    const registrarUsuario=async datos=>{
        try {
            const respuesta=await clienteAxios.post('/api/usuarios',datos);
            console.log(respuesta.data);
            dispatch({
                type:REGISTRO_EXITOSO,
                payload:respuesta.data
            })

            // obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            // console.log(error.response.data.msg);
            const alerta={
                msg:error.response.data.msg,
                categoria:'alerta-error'
            }
            dispatch({
                type:REGISTRO_ERROR,
                payload:alerta

            })
        }
    }
        // retornar el usuario ya autenticado
        const usuarioAutenticado=async()=>{
            const token=localStorage.getItem('token'); //leert el token que esta en el localstorage
            if(token){
                // funcion para enviar el token por header
                tokenAuth(token);
            }
            try {
                const respuesta=await clienteAxios.get('/api/auth');
                // console.log(respuesta);
                dispatch({
                    type:OBTENER_USUARIO,
                    payload:respuesta.data.usuario
                });
                
            } catch (error) {
                console.log(error.response);
                dispatch({
                    type:LOGIN_ERROR
                });
            }
        }

        // cuando el usuario inicia sesion
        const iniciarSesion=async datos=>{
            try {
                const respuesta=await clienteAxios.post('/api/auth',datos);
                dispatch({
                    type:LOGIN_EXITOSO,
                    payload:respuesta.data
                });

                // obtener el usuario
                usuarioAutenticado();
            } catch (error) {
                console.log(error.response.data.msg)
                const alerta={
                    msg:error.response.data.msg,
                    categoria:'alerta-error'
                }
                dispatch({
                    type:LOGIN_ERROR,
                    payload:alerta
                })
            }
        }
        // cerrar sesion
        const CerrarSesion=()=>{
            dispatch({
                type:CERRAR_SESION
            })
        }
    return(
        <AuthContext.Provider
            value={{
                token:state.token,
                autenticado:state.autenticado,
                usuario:state.usuario,
                mensaje:state.mensaje,
                cargando:state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                CerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;