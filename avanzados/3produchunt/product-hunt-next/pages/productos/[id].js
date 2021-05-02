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
const Producto = () => {
  // state del componente
  const [producto, setproducto] = useState({});
  // state del error
  const [error, seterror] = useState(false);
  // roter para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //   context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      const obtenerProducto = async () => {
        const productos = await firebase.db.collection("productos").doc(id);
        const producto = await productos.get();
        if (producto.exists) {
          setproducto(producto.data());
        } else {
          seterror(true);
        }
      };
      obtenerProducto();
    }
  }, [id]);
  if (Object.keys(producto).length === 0)
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
  } = producto;
  // adminsitrar u valisr los votos
  const votarProducto = () => {
    console.log("votando");
  };
  return (
    <Layout>
      <>
        {error && <Error404 />}
        <div className="contenedor">
          <Titulo>{nombre}</Titulo>

          <COntenedorProducto>
            <div>
              <p>
                Publicado hace:{" "}
                {formatDistanceToNow(new Date(creado), { locale: es })}
              </p>
              <img src={urlimagen} />
              <img src={urlimagen2} />

              <p>{descripcion}</p>

              {usuario && (
                <>
                  <h2>Agrega tu comentario</h2>

                  <form>
                    <Campo>
                      <input type="text" name="mensaje" />
                    </Campo>
                    <InputSubmit type="submit" value="Agregar Comentario" />
                  </form>
                </>
              )}
              <Comentarios>Comentarios</Comentarios>

              <div>
                {comentarios.map((comentario) => (
                  <li>
                    <p>{comentario.nombre}</p>
                    <p>Escrito por: {comentario.usuarioNombre}</p>
                  </li>
                ))}
              </div>
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
                {usuario && <Boton onClick={votarProducto}>Votar</Boton>}
              </Votos>
            </aside>
          </COntenedorProducto>
        </div>
      </>
    </Layout>
  );
};

export default Producto;
