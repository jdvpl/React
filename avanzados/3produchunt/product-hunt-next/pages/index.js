import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout"; //se llama el layout para reutilizarlo
import { FirebaseContext } from "../firebase";

const Perro = styled.h1`
  color: yellowgreen;
`;
const Home = () => {
  // state para los productos
  const [productos, setproductos] = useState([]);
  // context de firebase
  const { firebase } = useContext(FirebaseContext);

  // useeffect para que cargue

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setproductos(productos);
  }
  return (
    <Layout>
      {" "}
      {/* //!se llamar el layout el principal para reutilizarlas en todas las
      //!paginas */}
      <Perro>Kamisama</Perro>
    </Layout>
  );
};

export default Home;
