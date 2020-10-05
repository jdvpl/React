// anterior forma con las clases en js
// function tarea(
//     this.nombre = tarea
// )
// clases hoy en dia
// creando clases heredando

export default class Tarea { //padre clase
    constructor(nombre, prioridad) {
            this.nombre = nombre;
            this.prioridad = prioridad;
        }
        // creando metodo
    mostrar() {
        console.log(`${this.nombre} tiene una priridad ${this.prioridad}`)
    }
}




// // crear los objetos

// let tarea1 = new Tarea('Aprender JS', 'Alta');
// let tarea2 = new Tarea('Aprender React', 'Alta');
// let tarea3 = new Tarea('Aprender Python', 'Alta');
// let tarea4 = new Tarea('Aprender R', 'Alta');

// // console.log(tarea1.mostrar());
// // console.log(tarea2.mostrar());
// // console.log(tarea3.mostrar());
// // console.log(tarea4.mostrar());

// let compra1 = new ComprasPendiente('Jabon', 'Alta', 2, 3000, 'valor a pagar')
// compra1.mostrar();
// console.log(compra1.hola())

// esxportandola variable para usarla en otro archivo

// export const nombredetarea = 'pasear al perro';


// // exportando funciones
// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
// }
// export const TareaCompletada = () => {
//     console.log(`La tarea ha sido compleatada`)
// }