// creando un arreglo con objectos

const personas = [

    { nombre: 'kakaroto', edad: 25, curso: 'python' },
    { nombre: 'jiren', edad: 33, curso: 'JS' },
    { nombre: 'vegeta', edad: 38, curso: 'React' },
    { nombre: 'toppo', edad: 45, curso: 'Vue' },
    { nombre: 'Janemba', edad: 66, curso: 'Reac-native' },
    { nombre: 'whiss', edad: 200, curso: 'Angular' },
    { nombre: 'bills', edad: 255, curso: 'C#' }
]
console.log(personas)
    // filtrar quienes son mayores de 40 años
    // el nombre del arrow function no imortar
    // con la funcion .filter filtra colocando una condicion
const filtro = personas.filter(persona => {
    return persona.edad > 40;
});
console.log(filtro);
// cual es el curso e bills y su edad
// con la funcion .find encuantra o busca pasandole el parametro

const bills = personas.find(persona => {
    return persona.nombre === 'bills';
})
console.log(`El curso del Sr bills es: ${bills.curso}`);

//calcular el total de edades de todas la personas objetos que estan alli

let total = personas.reduce((edadTotal, personaa) => {
    return edadTotal + personaa.edad;
}, 0)

cantidadpersona = personas.length // para saber cuantos objecto hay dentro del arreglo
console.log(`El suma total de las edades es: ${total}`)
console.log(`el promedio es: ${total/cantidadpersona}`)