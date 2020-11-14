import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    //?state para inciar sesion
    const [usuario,guardarUsuario]=useState({
        nombre:'',
        telefono:'',
        username:'',
        email:'',
        linkFacebook:'',
        foto:'',
        sitioWeb:'',
        linkGithub:'',
        password:'',
        confirmar:''
    });

    // destructuring para traer el usuario y la contraseña
    const {nombre,telefono,username,email,foto,sitioWeb,linkGithub,linkFacebook,password,confirmar}=usuario;

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
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="Telefono"
                        onChange={onChange}
                        value={telefono}
                        />
                </div>
                <div className="campo-form">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Usuario"
                        onChange={onChange}
                        value={username}
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
                <label htmlFor="foto">Foto URL</label>
                <input
                    type="url"
                    id="foto"
                    name="foto"
                    placeholder="url foto"
                    onChange={onChange}
                    value={foto}
                    />
            </div>
            <div className="campo-form">
                <label htmlFor="linkFacebook">Facebook Url</label>
                <input
                    type="url"
                    id="linkFacebook"
                    name="linkFacebook"
                    placeholder="url foto"
                    onChange={onChange}
                    value={linkFacebook}
                    />
            </div>
            <div className="campo-form">
                <label htmlFor="sitioWeb">Sitio Web</label>
                <input
                    type="url"
                    id="sitioWeb"
                    name="sitioWeb"
                    placeholder="Sitio Web"
                    onChange={onChange}
                    value={sitioWeb}
                    />
            </div>
            <div className="campo-form">
                <label htmlFor="linkGithub">Repositorios</label>
                <input
                    type="url"
                    id="linkGithub"
                    name="linkGithub"
                    placeholder="Link de repositorios"
                    onChange={onChange}
                    value={linkGithub}
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