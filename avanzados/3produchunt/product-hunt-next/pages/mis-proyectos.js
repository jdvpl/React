import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layouts/Layout"; //se llama el layout para reutilizarlo
import DetallesProducto from "../components/layouts/DetallesProducto";
import { FirebaseContext } from "../firebase";

const MisProyectos = () => {
  // state para los productos
  const [productos, setproductos] = useState([]);
  // context de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  // useeffect para que cargue

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .where("creador.id", "==", usuario.uid)
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);
  console.log(productos);

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

export default MisProyectos;
