// extrayendo valores de los objetos
const aprendiendoJS={
    version:{
        nueva:'ES6+',
        anterior:'ES5'
    },
    frameworks:['React','VueJS','AngularJS']
}
console.log(aprendiendoJS);

// version anterior para extraer los valores

let version1=aprendiendoJS.version.nueva;
let frame=aprendiendoJS.frameworks[2];
console.log(frame);
console.log(version1);

// destructuring forma nueva

let {version,frameworks}=aprendiendoJS;
console.log(frameworks)
console.log(version);

let {anterior}=aprendiendoJS.version;
console.log(` la version anterior es: ${anterior}`)