// anterior forma con las clases en js
// function tarea(
//     this.nombre = tarea
// )
// clases hoy en dia
// creando clases heredando

class Tarea { //padre clase
    constructor(nombre, prioridad) {
            this.nombre = nombre;
            this.prioridad = prioridad;
        }
        // creando metodo
    mostrar() {
        console.log(`${this.nombre} tiene una priridad ${this.prioridad}`)
    }
}
class ComprasPendiente extends Tarea {
    constructor(nombre, prioridad, cantidad, precio, total) {
        super(nombre, prioridad); //con el super hereda las dos variables que estan en la clase principal
        this.cantidad = cantidad;
        this.precio = precio;
        this.total = precio * cantidad;

    }
    mostrar() {
        super.mostrar();
        console.log(`voy a comprar ${this.cantidad}, el precio unitario es: ${this.precio}
        valor a pagar: ${this.total}`)
    }
    hola() {
        return 'insecto'
    }
}
// crear los objetos

let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Python', 'Alta');
let tarea4 = new Tarea('Aprender R', 'Alta');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

let compra1 = new ComprasPendiente('Jabon', 'Alta', 2, 3000, 'valor a pagar')
compra1.mostrar();
console.log(compra1.hola())

// esxportandola variable para usarla en otro archivo

const nombredetarea = 'pasear al perro';
export default nombredetarea;