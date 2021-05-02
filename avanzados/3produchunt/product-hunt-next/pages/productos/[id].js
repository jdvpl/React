import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layouts/404";
import styled from "@emotion/styled";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Titulo = styled.h1`
  margin-top: 5rem;
  text-align: center;
`;

const Central = styled.div`
  position: absolute;
  top: 20rem;
  left: 40rem;
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
  const { firebase } = useContext(FirebaseContext);

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
  const { nombre } = producto;

  return (
    <Layout>
      <>
        {error && <Error404 />}
        <div className="contenedor">
          <Titulo>{nombre}</Titulo>
        </div>
      </>
    </Layout>
  );
};

export default Producto;
