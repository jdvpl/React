import React, { useEffect, useContext } from "react";
import Barra from "./Barra";
import AuthContext from "../../context/autenticacion/authContext";
import { Link } from "react-router-dom";

const Perfil = () => {
  // extraer la info de la autenticacion
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Barra />
      <div className="contenedor-perfil">
      
      {usuario? 
      <div>
      <img src={usuario.foto} className="foto" alt={usuario.nombre}/>
      <p className="nombre-usuario">Nombre: <span>{usuario.nombre}
      </span></p>
      <p className="nombre-usuario">Usuario: <span>{usuario.username}</span></p>
      <p className="nombre-usuario">Correro: <span>{usuario.email}</span></p>
      <p className="nombre-usuario">Telefono: <span>{usuario.telefono}</span></p>
      <a href={usuario.linkFacebook} target="_blank" rel="noreferrer" className="feacebook">Facebook</a>
      <a href={usuario.linkGithub} target="_blank" rel="noreferrer" className="github">Github</a>
      <a href={usuario.sitioWeb} target="_blank" rel="noreferrer" className="sitio">SitioWeb</a>
      <Link to={'/proyectos'} >
               <button className="boton">Proyectos</button>
            </Link>
      </div>:null}
      </div>
    </div>
  );
};

export default Perfil;
