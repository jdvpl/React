import React, { useEffect, useState } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valores, setvalores] = useState(stateInicial);
  const [errores, seterrores] = useState({});
  const [submitForm, setsubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn(); //funcion que se ejecuta en el componente
      }
      setsubmitForm(false);
    }
  }, [errores]);
  // funcion que se ejecuta cuando el usuario escribe
  const handleChange = (e) => {
    setvalores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  // funcion que se ejecuta cuando el usuari hace el submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    seterrores(erroresValidacion);
    setsubmitForm(true);
  };
  // cuando se realiza el evento de BLur
  const handleBLur = () => {
    const erroresValidacion = validar(valores);
    seterrores(erroresValidacion);
  };
  return {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBLur,
  };
};

export default useValidacion;
