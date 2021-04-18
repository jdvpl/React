import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { FirebaseContext } from "../firebase";
import Router, { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";

import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearProducto from "../validacion/validarCrearProducto";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  // imagen: "",
  sitio: "",
  url: "",
  descripcion: "",
};

const NuevoProducto = () => {
  // state de las imagenes
  // nombre
  const [nombreimagen, guardarNombre] = useState("");

  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState("");

  // state de los errores de validacion y de la base de datos1
  const [error, seterror] = useState(false);
  // context con las operacion crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);
  // colocar el state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBLur,
  } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);
  // valroes que estan en el state inicial y el handlechange los coloca
  const { nombre, empresa, imagen, sitio, url, descripcion } = valores;
  // hook del routing para redireccionar
  const router = useRouter();
  // funcion para crear el producto
  async function crearProducto() {
    // si el usuario no esta autenticado llevar al login

    if (!usuario) {
      return router.push("/login");
    }

    // crear el producto de nuevo producto
    const producto = {
      nombre,
      empresa,
      sitio,
      url,
      urlimagen,
      descripcion,
      votos: 0,
      cometarios: [],
      creado: Date.now(),
    };

    // insertar a la base de datos
    firebase.db.collection("productos").add(producto);
    router.push("/");
  }

  // handles de las imagenes
  // comenzar a subier
  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };
  // progreso
  const handleProgress = (progreso) => guardarProgreso({ progreso });
  // error de subida
  const handleUploadError = (error) => {
    guardarSubiendo(error);
    console.error(error);
  };
  // se sube correctamente
  const handleUploadSuccess = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        guardarUrlImagen(url);
      });
  };

  return (
    <Layout>
      <>
        <Titulo>Nuevo Producto</Titulo>

        <Formulario onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}

          <fieldset>
            <legend>Informacion General</legend>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>

            {errores.nombre && <Error>{errores.nombre}</Error>}

            <Campo>
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                placeholder="Empresa o Compañia"
                name="empresa"
                value={empresa}
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>
            {errores.empresa && <Error>{errores.empresa}</Error>}

            <Campo>
              <label htmlFor="imagen">Imagen</label>
              <FileUploader
                accept="image/*"
                id="imagen"
                name="imagen"
                randomizeFilename
                storageRef={firebase.storage.ref("productos")}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
              />
            </Campo>

            <Campo>
              <label htmlFor="sitio">Sitio Web</label>
              <input
                type="url"
                id="sitio"
                name="sitio"
                value={sitio}
                placeholder="Url del sitio Web"
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>
            {errores.sitio && <Error>{errores.sitio}</Error>}

            <Campo>
              <label htmlFor="url">Repositorio</label>
              <input
                type="url"
                id="url"
                name="url"
                value={url}
                placeholder="Url del repositorio"
                onChange={handleChange}
                onBlur={handleBLur}
              />
            </Campo>
            {errores.url && <Error>{errores.url}</Error>}
          </fieldset>

          {errores.descripcion && <Error>{errores.descripcion}</Error>}
          <fieldset>
            <legend>Sobre tu Producto</legend>

            <Campo>
              <label htmlFor="descripcion">Descripcion</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
                onBlur={handleBLur}
              ></textarea>
            </Campo>
          </fieldset>

          <InputSubmit type="submit" value="Crear Producto" />
        </Formulario>
      </>
    </Layout>
  );
};

export default NuevoProducto;
