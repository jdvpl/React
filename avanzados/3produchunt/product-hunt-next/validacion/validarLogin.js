export default function validarLogin(valores) {
  let errores = {};

  // valdiar el email
  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "El email no es valido";
  }

  // validar el password
  if (!valores.password) {
    errores.password = "La contraseña es obligatorio";
  } else if (valores.password.length < 6) {
    errores.password = "La contraseña debe ser de al menos 6 caracteres";
  }
  return errores;
}
