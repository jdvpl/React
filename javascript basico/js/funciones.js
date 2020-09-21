// creando funciones

function saludar() {
    console.log("Bienvenido");
}
saludar();

// creando funciones pasandole parametros la mejor 
saludar("Jiren");

function saludar(nombre) {
    console.log("Bienvenido " + nombre);
}
saludar("kakaroto");

// function expression
const cliente = function(nombre) {
    console.log("Bienvenido insecto " + nombre);
}
cliente("Juan");

// parametros por default en las funciones
function actividad(nombre = "Juan", actividad = "Porgramando en React") {
    console.log(`${nombre} esta ${actividad}`);

}
actividad("Jiren", "peliando con goku");
actividad();

// arrow function
let viajando = function(ciudad = "Garzon") {
    return `Viajando hacia ${ciudad}`;
}
let viaje = viajando("Paris");
console.log(viaje)

// el arrow function recorta la palabra function por =>
let manejan = (ciudad = "Garzon") => `Viajando hacia ${ciudad}`;

let viaje1 = manejan("Paris");
console.log(viaje1)