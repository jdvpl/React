// promises es para ejecutar una accion pr ejemplo con una api que si 
// fue correcta se imprimira los datos y sino un reject con el mensaje de error
// resolve : es el codigo que se ejectua con el llamado
// reject: es cuando hay un error
// si aparece pending es por que hace falta algo al codigo del promise


const apllicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;
        if (descuento) {
            resolve(`Descuento aplicado`)
        } else {
            reject(`No se pudo aplicar el descuento`)
        }
    }, 3000);
});
apllicarDescuento.then(resultado => {
    console.log(resultado)
}).catch(error => { //con el catch mostrara el tipo de error porque no paso
    console.log(error)
})