// // objecto literal enhancemnet
// const banda = 'metalica';
// const genero = 'Heavy metal';
// const canciones = ["Enter Sandman", "Master of pupets", "All night mare long"];

// // const metalica = {
// //     banda: banda,
// //     genero: genero,
// //     canciones: canciones
// // }
// // console.log(metalica)


// // forma nueva
// const metalica = { banda, genero, canciones };
// console.log(metalica);

// agregando funciones en un objeto
const person = {
    nombre: "Juan",
    trabajo: "Full Stack Developer",
    edad: 25,
    musicaRock: true,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} su edad es ${this.edad}`)
    }
}
person.mostrarInformacion();