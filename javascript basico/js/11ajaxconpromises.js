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
descargarUsuario(30).then(

    miembros => imprimirHTML(miembros), //crear una funcion para imprimir en el dom de html
    error => console.error(
        new Error(`Hubo unn error ${error}`)

    )
)

function imprimirHTML(usuarios) {
    let html = ''; //crea variable vacia para ir agregando etiquetas
    usuarios.forEach(usuario => { //usuario nombre con el que se va a recorrer, name, picture son claves del api
        html += `<div>
                <li>Nombre: ${usuario.name.first} ${usuario.name.last} </li>
                <li>Pais: ${usuario.nat}</li>
                <h5>Foto</h5>
                <img src="${usuario.picture.medium}">
                </div>
        `;
    });
    const contenedorHtml = document.querySelector('#app');
    contenedorHtml.innerHTML = html;

}




// codigo 2020 mucho mas corto y mas facil on una funcion asincrona
// mostrando la api en consola

async function getUserAsync(cantidadUsuarios) {
    try {
        let response = await fetch(
            `https://randomuser.me/api/?results=${cantidadUsuarios}&nat=mx`
        );
        let data = await response.json();
        return data;
    } catch (error) {
        return "Ocurrio el siguiente error: " + error;
    }
}

getUserAsync(1000).then(data => console.log(data));