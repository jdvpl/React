import React from "react";
import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";

const Buscar = () => {
  const router = useRouter();
  const {
    query: { buscando },
  } = router;
  console.log(buscando);
  return (
    <Layout>
      <h1>Buscar</h1>
    </Layout>
  );
};

export default Buscar;
