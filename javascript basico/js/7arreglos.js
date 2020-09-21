// arreblos y .map

const carrito = ['priducto 1', 'producto 2', 'producto 3'];
// console.log(carrito)
// imprimiendo los datos de carrito en el dom de html
const AppContenedor = document.querySelector('#carrito');
// AppContenedor.innerHTML = carrito; //con este metodo se agregan todos al mismo tiempo
// de manera individual
let htmlcarrito = ''; //se inicia de manera vacia para ir agregando
carrito.forEach(producto => {
    htmlcarrito += `<li>${producto}</li>`;

})
AppContenedor.innerHTML = htmlcarrito;