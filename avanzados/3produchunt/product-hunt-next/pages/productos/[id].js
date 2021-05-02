import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layouts/404";
import styled from "@emotion/styled";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { Campo, InputSubmit } from "../../components/ui/Formulario";
import Boton from "../../components/ui/Boton";

const Titulo = styled.h1`
  margin-top: 5rem;
  text-align: center;
`;

const Central = styled.div`
  position: absolute;
  top: 20rem;
  left: 40rem;
`;

const COntenedorProducto = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  } ;
`;

const Comentarios = styled.h2`
  margin-top: 2rem;
  text-align: center;
`;
const Votos = styled.div`
  margin-top: 1rem;
  p {
    text-align: center;
  }
`;
const PhotoPerfil = styled.div`
  margin-top: 2rem;
  text-align: center;
  img {
    margin-right: 1rem;
    width: 5rem;
    border-radius: 5rem;
  }
  p {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const Imagenes = styled.div`
  padding: 1rem;
  vertical-align: center;
  img {
    width: 50%;
  }
`;
const ImgComentario = styled.div`
  img {
    width: 2rem;
    border-radius: 5rem;
  }
  p {
    margin-top: -1rem;
    text-transform: capitalize;

    span {
      font-weight: bold;
      position: absolute;
      margin-left: 1rem;
    }
  }
`;
const Li = styled.li`
  border: 1px solid #e1e1e1;
  padding: 2rem;
`;

const CreadorProducto = styled.p`
  padding: 0.5rem 2rem;
  background-color: #000;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  text-align: right;
  display: inline-block;
`;
const Producto = () => {
  // state del componente
  const [producto, setproducto] = useState({});
  const [consultarDb, setconsultarDb] = useState(true);
  // state del error
  const [error, seterror] = useState(false);
  // state del comentarios
  const [comentario, setcomentario] = useState({});
  // roter para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //   context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDb) {
      const obtenerProducto = async () => {
        const productos = await firebase.db.collection("productos").doc(id);
        const producto = await productos.get();
        if (producto.exists) {
          setproducto(producto.data());
          setconsultarDb(false);
        } else {
          seterror(true);
          setconsultarDb(false);
        }
      };
      obtenerProducto();
    }
  }, [id]);
  if (Object.keys(producto).length === 0 && !error)
    return (
      <Central>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Central>
    );
  //   destructuring
  const {
    comentarios,
    creado,
    descripcion,
    nombre,
    urlimagen,
    urlimagen1,
    urlimagen2,
    urlimagen3,
    urlimagen4,
    urlimagen5,
    empresa,
    sitio,
    votos,
    url,
    creador,
    haVotado,
  } = producto;
  // adminsitrar u valisr los votos
  const votarProducto = () => {
    if (!usuario) {
      return router.push("/login");
    }

    // guarda el ID del usuario que ha votado
    const NuevohaVotado = [...haVotado, usuario.uid];

    // obtener y sumas votos
    const nuevoTotal = votos + 1;

    // acutualiuzar la base de datos
    firebase.db
      .collection("productos")
      .doc(id)
      .update({ votos: nuevoTotal, haVotado: NuevohaVotado });
    // guardarporductos actualizando el state
    setproducto({
      ...producto,
      votos: nuevoTotal,
    });
    setconsultarDb(true); //hay un coto por lo tanto consulta a la base de datos
  };
  // funciones para crear comentarios
  const comentarioChange = (e) => {
    setcomentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };
  // agregar comentario
  const agregarComentario = (e) => {
    e.preventDefault();

    if (!usuario) {
      return router.push("/login");
    }
    // informacion extra ala comentario
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;
    comentario.usuarioPhoto = usuario.photoURL;

    // tomar copira de comntarios y agregarlos al arreglo
    const nuevosCOmentarios = [...comentarios, comentario];

    // actualizar la BD
    firebase.db.collection("productos").doc(id).update({
      comentarios: nuevosCOmentarios,
    });
    // acutualizar el state

    setcomentario({
      ...producto,
      Comentarios: nuevosCOmentarios,
    });
    setconsultarDb(true); // hay un comonetarios entonces consulta la BD
  };
  // funciona para verificar si es el creador del producto
  const esCreador = (id) => {
    if (creador.id == id) {
      return true;
    }
  };
  // fincions que revisa que el creador del productor sea el mismo que esta autenticado
  const puedeBorrar = () => {
    if (!usuario) return false;

    if (creador.id === usuario.uid) {
      return true;
    }
  };
  // eliminar un producto
  const eliminarProducto = async () => {
    if (!usuario) {
      return router.push("/login");
    }

    if (creador.id !== usuario.uid) {
      return router.push("/");
    }
    try {
      await firebase.db.collection("productos").doc(id).delete();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <>
        {error ? (
          <Error404 />
        ) : (
          <div className="contenedor">
            <Titulo>{nombre}</Titulo>

            <COntenedorProducto>
              <div>
                <p>
                  Publicado hace:{" "}
                  {formatDistanceToNow(new Date(creado), { locale: es })}
                </p>
                <Imagenes>
                  <img src={urlimagen} />
                  <img src={urlimagen1} />
                  <img src={urlimagen2} />
                  <img src={urlimagen3} />
                  <img src={urlimagen4} />
                  <img src={urlimagen5} />
                </Imagenes>

                <p>{descripcion}</p>

                {usuario && (
                  <>
                    <h2>Agrega tu comentario</h2>

                    <form onSubmit={agregarComentario}>
                      <Campo>
                        <input
                          type="text"
                          name="mensaje"
                          onChange={comentarioChange}
                        />
                      </Campo>
                      <InputSubmit type="submit" value="Agregar Comentario" />
                    </form>
                  </>
                )}

                {comentarios.length === 0 ? (
                  <h3>Aun no hay comentarios</h3>
                ) : (
                  <>
                    <Comentarios>Comentarios</Comentarios>
                    <div>
                      <ul>
                        {comentarios.map((comentario, i) => (
                          <Li key={`${comentario.usuarioId}-${i}`}>
                            <p>{comentario.mensaje}</p>

                            <ImgComentario>
                              <p>
                                {!comentario.usuarioPhoto ? (
                                  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-jdvpl.appspot.com/o/userimg%2Fusuario.png?alt=media&token=961a0ebd-89cc-4ecb-a447-5acd874d95f5" />
                                ) : (
                                  <img src={comentario.usuarioPhoto} />
                                )}
                                <span>{comentario.usuarioNombre}</span>
                              </p>
                              {esCreador(comentario.usuarioId) && (
                                <CreadorProducto>Owner</CreadorProducto>
                              )}
                            </ImgComentario>
                          </Li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              <aside>
                <Boton target="_blank" bgColor="true" href={url}>
                  Visitar URL
                </Boton>

                <PhotoPerfil>
                  <img src={creador.photo} />
                  <p>
                    {creador.nombre} de {empresa}
                  </p>
                </PhotoPerfil>

                <Votos>
                  <p>{votos} votos</p>
                  {!usuario ? (
                    ""
                  ) : haVotado.includes(usuario.uid) ? (
                    <p>ya votaste</p>
                  ) : (
                    <Boton onClick={votarProducto}>Votar</Boton>
                  )}
                </Votos>
              </aside>
            </COntenedorProducto>

            {puedeBorrar() && (
              <Boton onClick={eliminarProducto}>Eliminar Producto</Boton>
            )}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Producto;
