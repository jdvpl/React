import {
  REGISTRO_EXISTOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/index";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXISTOSO:
    return{
      ...state,

    }
    case REGISTRO_ERROR:
      return{
        ...state
      }

    default:
      return state;
  }
};
export default authReducer;
