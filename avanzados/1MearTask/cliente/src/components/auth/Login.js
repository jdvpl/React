import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = () => {
      // extraer los valores del context
      const alertaContext=useContext(AlertaContext);
      const {alerta,MostrarAlerta}=alertaContext;
  
      const authContext=useContext(AuthContext);
      const {mensaje,autenticado,iniciarSesion} =authContext;



    //?state para inciar sesion
    const [usuario,guardarUsuario]=useState({
        email:'',
        password:''
    });

    // destructuring para traer el usuario y la contraseña
    const {email,password}=usuario;

    const onChange=e=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
        
    }
    // cuando el usuario inicia sesion
    const onSubmit=e=>{
        e.preventDefault();

        // valdiar que no haya campos vacios
        if(email.trim()===''||password.trim()===''){
            MostrarAlerta('Todos los campos son obligatorios','alerta-error')
        }
        // pasarlo al action.payload
        iniciarSesion({email,password});

    }
    return ( 
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Inciar Sesion</h1>
            {alerta? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>: null}

            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo"
                        onChange={onChange}
                        value={email}
                        />
                </div>

                <div className="campo-form">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={onChange}
                        value={password}
                        />
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesion"/>

                </div>

            </form>
            <Link to={'/nueva-cuenta'} className="enlace-cuenta">
               Obtener Cuenta
            </Link>
        </div>
        </div>
     );
}
 
export default Login;