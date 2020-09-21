
// creando variables
var kisama="kisama"
peroo="jiren"
peroo=259
console.log(kisama)
console.log(peroo)

// variables con numeros "var"

var x1=3
git=3
console.log(x1+git)

// variables con const deben ser incializadas y sus valores nunca cambian
const jiren=3
console.log(jiren)

// variables con let es muy similar a var

let kakaroto="kakaroto"
console.log(kakaroto)

// scope es para que no tome los valores iguales en este caso con let los separa y no entra en el condicional
let musica="Rock"
if(musica){
    let musica="Salsa"
    console.log("Dentro del If ",musica)
}
console.log("Fuera del if ",musica)
