import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";
import DetallesProducto from "../components/layouts/DetallesProducto";
import useProductos from "../hooks/useProducto";

const Buscar = () => {
  const [resultado, setresultado] = useState([]);
  const router = useRouter();

  const {
    query: { q },
  } = router;
  //filtro de lso poorductos
  const { productos } = useProductos("creado");

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = productos.filter((producto) => {
      return (
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda) ||
        producto.creador.nombre.toLowerCase().includes(busqueda) ||
        producto.empresa.toLowerCase().includes(busqueda) ||
        producto.sitio.toLowerCase().includes(busqueda) ||
        producto.url.toLowerCase().includes(busqueda)
      );
    });
    setresultado(filtro);
  }, [q, productos]);

  return (
    <div>
      <Layout>
        {" "}
        {/* //!se llamar el layout el principal para reutilizarlas en todas las
    //!paginas */}
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {resultado.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Buscar;
