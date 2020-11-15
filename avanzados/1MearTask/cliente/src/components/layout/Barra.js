import React,{useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import imagen from '../../cerrar.png';
import proyectos from '../../presentacion.png';
const Barra = () => {
  // extraer la info de la autenticacion
  const authContext=useContext(AuthContext);
  const {usuario,usuarioAutenticado,CerrarSesion}=authContext;


  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
    return (
        <div className="app-header">
          {usuario? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> :null}
          <nav className="nav-principal">
          
          <button className="img btn btn-blank cerrar-sesion"
            onClick={()=>CerrarSesion()}
          >
          <img src={imagen} width="25" alt="Cerrar"></img>
          </button>
          <Link to={'/proyectos'} >
          <img src={proyectos} width="25" alt="Poryectos"></img>
            </Link>
            <Link to={'/perfil'}>
            {usuario?<img src={usuario.foto} width="25" alt={usuario.nombre} className="img" title={usuario.nombre}></img>:'Perfil'}
            </Link>
            
          </nav>
        </div>
      );
}
 

export default Barra;