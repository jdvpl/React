// objetos
// objetos literales

const Datos={
    nombre:'Juan Daniel',
    profesion: 'Desarrollador Full Stack',
    telefono:'3209188638',
    email:'Juanda554242@gmail.com',
    edad:25
}
// accediendo a los datos completos
console.log(Datos);
// accediendo por cada datos
console.log(Datos.email);
console.log(Datos['profesion']);

// object constructor


function Tarea(nombre, urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}
const tarea1=new Tarea("Aprendiendo Javascript y React ", "Urgente");
const tarea2=new Tarea("Aprendiendo Python en la Nacional", "Urgente");
const tarea3=new Tarea("Aprendiendo Goland y React ", "Urgente");
const tarea4=new Tarea("Aprendiendo Seguridad informatica ", "Urgente");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);