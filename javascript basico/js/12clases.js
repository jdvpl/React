// anterior forma con las clases en js
// function tarea(
//     this.nombre = tarea
// )
// clases hoy en dia

class Tarea {
    constructor(nombre, prioridad) {
            this.nombre = nombre;
            this.prioridad = prioridad;
        }
        // creando metodo
    mostrar() {
        return (`${this.nombre} tiene una priridad ${this.prioridad}`)
    }
}
// crear los objetos

let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Python', 'Alta');
let tarea4 = new Tarea('Aprender R', 'Alta');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());