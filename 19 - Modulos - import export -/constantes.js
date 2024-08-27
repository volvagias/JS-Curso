// Puedo exportar variables y funciones para importarlas en otro lugar (en este caso en modulos.js).

export const PI = Math.PI;
export let usuario = "Leo";

export default function saludar() {    // default: cuando se llame a esta función se exporta automáticamente sin import.
    console.log("Hola Módulos +ES6");  // NOTA: solo se puede usar 1 SOLO export default. 
}

/* export default sirve para clases también:

export default class Saludar {
    constructor() {
        console.log("Holis");
    }
}

*/

/* con una variable el export default se hace así:

const comida = "Pizza";
export default comida;

*/
