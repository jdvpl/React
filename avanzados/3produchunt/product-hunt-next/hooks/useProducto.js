import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const useProductos = (orden) => {
  // state para los productos
  const [productos, setproductos] = useState([]);
  // context de firebase
  const { firebase } = useContext(FirebaseContext);

  // useeffect para que cargue

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy(orden, "desc")
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
  return {
    productos,
  };
};

export default useProductos;
