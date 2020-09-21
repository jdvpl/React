// para unir los dos arreglos
let lenguajes = ["Js", "Php", "python", "C#"];
let frameworks = ["React", "Laravel", "Django"];

// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion)

// forma nueva

let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion)

let [ultimo] = lenguajes.reverse(); //obtiene el ultimo pero lo revierte
console.log(lenguajes)
console.log(ultimo)
    // con spread operator
let [ultimoSpred] = [...lenguajes].reverse(); //no se invierte el arreglo
console.log(ultimoSpred)

function suma(a, b, c) {
    console.log(a + b + c);
}
const numeros = [1, 2, 3];
suma(...numeros)