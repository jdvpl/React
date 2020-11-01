import React from 'react';

const Login = () => {
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

            </form>
        </div>
        </div>
     );
}
 
export default Login;