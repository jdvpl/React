import React,{useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

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
            <a href="#!">Cerrar Sesion</a>
          </nav>
        </div>
      );
}
 

export default Barra;