import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout"; //se llama el layout para reutilizarlo

const Perro = styled.h1`
  color: yellowgreen;
`;
const Home = () => {
  return (
    <Layout>
      {" "}
      //!se llamar el layout el principal para reutilizarlas en todas las
      //!paginas
      <Perro>Kamisama</Perro>
    </Layout>
  );
};

export default Home;
