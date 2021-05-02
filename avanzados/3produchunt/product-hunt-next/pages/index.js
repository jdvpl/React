import React from "react";
import Layout from "../components/layouts/Layout"; //se llama el layout para reutilizarlo
import DetallesProducto from "../components/layouts/DetallesProducto";
import useProductos from "../hooks/useProducto";

const Home = () => {
  const { productos } = useProductos("creado");
  return (
    <Layout>
      {" "}
      {/* //!se llamar el layout el principal para reutilizarlas en todas las
      //!paginas */}
      <div className="listado-productos">
        <div className="contenedor">
          <ul className="bg-white">
            {productos.map((producto) => (
              <DetallesProducto key={producto.id} producto={producto} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
