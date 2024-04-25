import mitt from "mitt";
import Cookies from "js-cookie";

// const CLAVE_LOCALSTORAGE_USUARIO = "token";

// Crea una instancia de mitt
const eventBus = mitt();

const usuario = {
  data: {},
};

const eliminarUsuario = () => {
  //localStorage.removeItem(CLAVE_LOCALSTORAGE_USUARIO);
  Cookies.remove("_head");
  Cookies.remove("_token");
  Cookies.remove("_key");
  eventBus.emit("cerrarSesion");
};

const obtenerUsuario = () => {
  //const posibleUsuario = localStorage.getItem(CLAVE_LOCALSTORAGE_USUARIO);
  const token = Cookies.get("_token");
  let posibleUsuario = undefined;
  if (token !== undefined) {
    const head = Cookies.get("_head");
    const key = Cookies.get("_key");
    posibleUsuario = head + "." + token + "." + key;
  } else {
    // espacio vacío
  }
  return posibleUsuario;
};

const establecerToken = (token) => {

  //tengo que hacer un split a token para mandar las 3 cookies
  const key = token.split(".");
  eventBus.emit("establecerToken", token);
  Cookies.set("_head", key[0], { Secure: true });
  Cookies.set("_token", key[1], { Secure: true });
  Cookies.set("_key", key[2], { Secure: true });
  //localStorage.setItem(CLAVE_LOCALSTORAGE_USUARIO, btoa(JSON.stringify(usuario)));
};

export {
  usuario,
  eliminarUsuario,
  obtenerUsuario,
  establecerToken,
  eventBus as EventBus,
};
