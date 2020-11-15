import React,{useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import imagen from '../../cerrar.png';
import usuario1 from '../../usuario.png';
import proyectos from '../../presentacion.png';
const Barra = () => {
  // extraer la info de la autenticacion
  const authContext=useContext(AuthContext);
  const {usuario,usuarioAutenticado}=authContext;

  useEffect(() => {
    usuarioAutenticado();
    
  }, []);

    return (
        <div className="app-header">
          {usuario? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> :null}
          <nav className="nav-principal">
          <a href="#!" className="img"><img src={imagen} width="20"></img></a>
          <Link to={'/proyectos'} >
          <img src={proyectos} width="20"></img>
            </Link>
            <Link to={'/perfil'}>
              <img src={usuario1} width="20"></img>
            </Link>
          
          </nav>
        </div>
      );
}
 

export default Barra;