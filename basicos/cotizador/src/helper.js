// obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear()-year;
}
// calcula el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento;
    
    switch(marca){
        case 'europeo':
            incremento=1.40;
            break;
        case 'americano':
            incremento=1.25;
            break;
        case 'asiatico':
            incremento=1.15;
            break;
        case 'africano':
            incremento=1.05;
            break;
        case 'oceanico':
            incremento=1.20;
            break;
        default:
            break;
    }
    return incremento;

}
export function obtenerPlan(plan){
    return(plan==='basico')?1.20:1.50;
}
// muestra la letra en mayuscula
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase()+texto.slice(1);
}