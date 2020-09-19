// objetos

function MostrarInformacionTarea(tarea, prioridad){
    return  `La tarea ${tarea} tiene una priridad de ${prioridad}`;
}

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

// mostrando cliente
const mostrarcliente=MostrarInformacionTarea(Datos.nombre,Datos.profesion);
console.log(mostrarcliente)

// object constructor


function Tarea(nombre, urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

// Agregando un prototype a tarea solo aplica a un objeto tarea es la palabra que comienza
// https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/11063284#notes
Tarea.prototype.MostrarInformacionTarea= function (){
    return  `La tarea ${this.nombre} tiene una priridad de ${this.urgencia}`;
}


const tarea1=new Tarea("Aprendiendo Javascript y React ", "Urgente");
const tarea2=new Tarea("Aprendiendo Python en la Nacional", "Urgente");


console.log(tarea1);
console.log(tarea1.MostrarInformacionTarea());

console.log(tarea2);
console.log(tarea2.MostrarInformacionTarea());