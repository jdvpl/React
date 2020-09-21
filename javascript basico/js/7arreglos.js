// arreblos y .map

const carrito = ['priducto 1', 'producto 2', 'producto 3'];
// console.log(carrito)
// imprimiendo los datos de carrito en el dom de html
const AppContenedor = document.querySelector('#carrito');
// AppContenedor.innerHTML = carrito; //con este metodo se agregan todos al mismo tiempo
// de manera individual
// let htmlcarrito = ''; //se inicia de manera vacia para ir agregando
// carrito.forEach(producto => {
//     htmlcarrito += `<li>${producto}</li>`;

// })
// AppContenedor.innerHTML = htmlcarrito;

// con .map
carrito.map(productos => {
    return `el prodcuto es ${productos}`;
});

// object keys
const persona = {
        nombre: 'Juan',
        profesion: 'software engeneer',
        edad: 25
    }
    // destructuring accedes a la clave del objeto igualandolo con el objeto
    // asi lo imprimes

const { nombre } = persona;
console.log(nombre)
    // con object keys es menos codigo e imprimes todos los valores
console.log(Object.keys(persona))