// cargar usuarios de una api la api origina es https://randomuser.me/api/
// retornando el resultado a nuestro html

const descargarUsuario = cantidad => new Promise((resolve, reject) => {
    // pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=mx`;
    // llamado a ajax
    const xhr = new XMLHttpRequest(); //llamado a ajax

    // abrir la conexion con ajax
    xhr.open('GET', api, true); //el primero para obteber datos get o post la direccion url y si quieres que se asincrono true
    // on load
    xhr.onload = () => {
            if (xhr.status === 200) { //===200 si el llamado es correcto
                resolve(JSON.parse(xhr.responseText).results);
            } else {
                reject(Error(xhr.statusText));
            }
        }
        // opcion on error
    xhr.onerror = (error) => reject(error);

    // send
    xhr.send()
})
descargarUsuario(200).then(

    miembros => console.log(miembros), //asi se imprime en consola
    error => console.error(
        new Error(`Hubo unn error ${error}`)

    )
)




// codigo 2020 mucho mas corto y mas facil on una funcion asincrona

// async function getUserAsync(cantidadUsuarios) {
//     try {
//         let response = await fetch(
//             `https://randomuser.me/api/?results=${cantidadUsuarios}&nat=mx`
//         );
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         return "Ocurrio el siguiente error: " + error;
//     }
// }

// getUserAsync(1000).then(data => console.log(data));