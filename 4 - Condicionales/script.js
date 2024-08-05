/* if - else if - else */
let edad = 17;

if(edad > 17) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Déjame Dormir - 0hs - 5hrs
// Buenos días 6hrs - 11hrs 
// Buenas tardes 12hrs - 18hrs 
// Buenas noches 19hrs - 23hrs 

let hora = 5;
if(hora >= 0 && hora <= 5) {
    console.log("Déjame Dormir");
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

/* Operador Ternario (condición)? verdadero : falsa */
// sirve para una sola línea de código, sin else if.

let eresMayor = (edad >= 18)
    ?"Eres mayor de Edad"
    :"Eres menor de edad";
// Si edad es mayor o igual a 18 (? parte verdadera) : (sino parte falsa);
console.log(eresMayor);


/* switch - case */
/*
domingo - 0
lunes - 1
martes - 2
miércoles - 3
jueves - 4
viernes - 5
sábado - 6
*/
let dia = 2;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;    
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");  // es el que aparecera en el console.log(dia)
        break;   
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:                    // si no existe ninguna coincidencia el default se ejecutará.
        console.log("El día no existe");
        break;
}











