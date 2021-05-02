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

  // valdiar el empresa
  if (!valores.hosting) {
    errores.hosting =
      "Los Hostings son relevantes por favor separar por ' , ' ";
  }

  if (!valores.participantes) {
    errores.participantes =
      "Los participantes que trabajaron, por favor separar por ' , ' ";
  }

  if (!valores.tecnologias) {
    errores.tecnologias =
      "Las tecnologias usadas, por favor separar por ' , ' ";
  }

  if (!valores.duracion) {
    errores.duracion = "Escribe la duracion del proyecto 15 dias, 3 meses .. ";
  }
  if (!valores.urlVideo) {
    errores.urlVideo = "Coloca la url del video explicativo";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.urlVideo)) {
    errores.sitio = "URL no valida";
  }
  return errores;
}
