import Constantes from "@/Constantes";
import { obtenerUsuario } from "@/EventBus";
const HttpService = {
    "formdata": async (ruta, fd) => {
        const token = obtenerUsuario();
        const respuestaRaw = await fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: "include",
            method: "POST",
            body: fd,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await respuestaRaw.json();
    },
    "login": async (ruta, datos) =>
        fetch(ruta, {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify(datos),
            headers: { "Content-Type": "application/json", "Host": "contravel.com.mx", }
        })
            .then(r => r.json())
    ,
    "post": async (ruta, datos) => {
        const token = obtenerUsuario();
        const respuestaRaw = await fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return await respuestaRaw.json();
    }

    ,
    "hoteles": async (ruta, datos) =>
        fetch(ruta, {
            credentials: 'same-origin',
            method: "POST",
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
    ,
    "put": async (ruta, datos) =>
        fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                'Authorization': `Bearer ${obtenerUsuario()}`
            }
        })
            .then(r => r.json())
    ,
    "get": async (ruta) =>{
        const token = obtenerUsuario();
        const respuestaRaw = await fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })  
        return await respuestaRaw.json();
    }

    ,
    "delete": async (ruta) =>
        fetch(Constantes.URL_SERVIDOR + ruta, {
            credentials: 'include',
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${obtenerUsuario()}`
            }
        })
            .then(r => r.json())
};
export default HttpService;