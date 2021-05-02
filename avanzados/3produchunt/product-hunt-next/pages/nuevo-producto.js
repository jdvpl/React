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
import Error404 from "../components/layouts/404";

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
  const [urlimagen1, guardarUrlImagen1] = useState("");
  const [urlimagen2, guardarUrlImagen2] = useState("");
  const [urlimagen3, guardarUrlImagen3] = useState("");
  const [urlimagen4, guardarUrlImagen4] = useState("");
  const [urlimagen5, guardarUrlImagen5] = useState("");

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
      urlimagen1,
      urlimagen2,
      urlimagen3,
      urlimagen4,
      urlimagen5,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
        photo: usuario.photoURL,
      },
      haVotado: [],
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
        guardarUrlImagen(url);
      });
  };

  const handleUploadSuccess1 = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url1) => {
        guardarUrlImagen1(url1);
      });
  };

  const handleUploadSuccess2 = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url2) => {
        guardarUrlImagen2(url2);
      });
  };

  const handleUploadSuccess3 = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url3) => {
        guardarUrlImagen3(url3);
      });
  };

  const handleUploadSuccess4 = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url4) => {
        guardarUrlImagen4(url4);
      });
  };

  const handleUploadSuccess5 = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url5) => {
        guardarUrlImagen5(url5);
      });
  };
  return (
    <Layout>
      {!usuario ? (
        <Error404 />
      ) : (
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
                  placeholder="Nombre del sitio"
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
              {/* imagen 0 */}
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

              {/* imagen 1 */}

              <Campo>
                <label htmlFor="imagen1">Imagen 2 </label>
                <FileUploader
                  accept="image/*"
                  id="imagen1"
                  name="imagen1"
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess1}
                  onProgress={handleProgress}
                />
              </Campo>

              {/* imagen 2 */}

              <Campo>
                <label htmlFor="imagen2">Imagen 3 </label>
                <FileUploader
                  accept="image/*"
                  id="imagen2"
                  name="imagen2"
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess2}
                  onProgress={handleProgress}
                />
              </Campo>

              {/* imagen 3 */}

              <Campo>
                <label htmlFor="imagen3">Imagen 4 </label>
                <FileUploader
                  accept="image/*"
                  id="imagen3"
                  name="imagen3"
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess3}
                  onProgress={handleProgress}
                />
              </Campo>
              {/* imagen 4 */}
              <Campo>
                <label htmlFor="imagen4">Imagen 5 </label>
                <FileUploader
                  accept="image/*"
                  id="imagen4"
                  name="imagen4"
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess4}
                  onProgress={handleProgress}
                />
              </Campo>

              {/* imagen 5 */}
              <Campo>
                <label htmlFor="imagen4">Imagen 6 </label>
                <FileUploader
                  accept="image/*"
                  id="imagen5"
                  name="imagen5"
                  randomizeFilename
                  storageRef={firebase.storage.ref("productos")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess5}
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
      )}
    </Layout>
  );
};

export default NuevoProducto;
