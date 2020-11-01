import React, { useState } from 'react';

const Login = () => {
    //?state para inciar sesion
    const [usuario,guardarUsuario]=useState({
        email:'',
        password:''
    });

    const onChange=()=>{
        
    }
    return ( 
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Inciar Sesion</h1>
            <form>
                <div className="campo-form">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo"
                        onChange={onChange}
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
                        />
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesion"/>

                </div>

            </form>
        </div>
        </div>
     );
}
 
export default Login;