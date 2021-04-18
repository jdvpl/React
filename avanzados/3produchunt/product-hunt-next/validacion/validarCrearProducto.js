export default function validarCrearProducto(valores) {
  let errores = {};
  // validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }
  // valdiar el empresa
  if (!valores.empresa) {
    errores.empresa = "Nombre de empresa es obligatorio";
  }

  // url
  if (!valores.url) {
    errores.url = "Coloca la url del repositorio";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL no valida";
  }

  // url
  if (!valores.sitio) {
    errores.sitio = "Coloca la url del Sitio";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.sitio = "URL no valida";
  }

  // valdiar el empresa
  if (!valores.descripcion) {
    errores.descripcion = "Escribe una Descripcion";
  }

  return errores;
}
