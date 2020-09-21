const Nombre="Juan Daniel Suarez";
let trabajo="Desarrollador full stack developer";

// concatenando version vieha salto de linea \n
console.log("Nombre: "+Nombre+"\n"+ trabajo);

// concatenando nueva version
console.log(`Nombre: ${Nombre} \n${trabajo}`);

// concatenar con multiples lineas
// seleccionando las etiquetas del Dom
const concatenandoApp=document.querySelector("#app");
let html='<ul>'+
            '<li> Nombre: '+Nombre+ '</li>'+
            '<li> Trabajo: '+trabajo+ '</li>'+
        '</ul>';
concatenandoApp.innerHTML=html;

// diferente manera de concatenar usar esta
const agregando=document.querySelector(".jiren");
let html1=`<ul>
            <li> Nombre: ${Nombre} </li>
            <li> Trabajo: ${trabajo} </li>
        </ul>`;
agregando.innerHTML=html1;