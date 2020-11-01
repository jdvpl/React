import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    //?state para inciar sesion
    const [usuario,guardarUsuario]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    // destructuring para traer el usuario y la contraseña
    const {nombre,email,password,confirmar}=usuario;

    const onChange=e=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
        
    }
    // cuando el usuario inicia sesion
    const onSubmit=e=>{
        e.preventDefault();
        // valikdar que no haya campos vacios

        // passwords minimos de 6 caracteres

        // que las contrasenas sean iguales

        // pasar al ction
    }
    return ( 
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Crear Cuenta</h1>
            <form
                onSubmit={onSubmit}
            >
             <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        onChange={onChange}
                        value={nombre}
                        />
                </div>
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
                    <label htmlFor="confirmar">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Confirmar Contraseña"
                        onChange={onChange}
                        value={confirmar}
                        />
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block"
                        value="Registrarme"/>
                </div>

            </form>
            <Link to={'/'} className="enlace-cuenta">
               Iniciar Sesion
            </Link>
        </div>
        </div>
     );
}
 
export default NuevaCuenta;