// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/*
function stringCount(cadena = '') {
    if(typeof cadena !== 'string') return console.error('No está permitido ingresar números. Solo letras.');
    if(typeof cadena === 'string') return console.info(cadena.length);
}
stringCount('Hola Mundo');
*/

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/*
function stringCut(texto = undefined, limite = undefined) {
    if(typeof texto !== 'string') return console.error('No está permitido ingresar números. Solo letras.');
    else {
        console.info(texto.slice(0, limite));
    }
}
stringCut('Hola Mundo', 4);
*/

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

/*
function textosSeparados(cadena = '', separador = '') {
    if(typeof cadena !== 'string') return console.error('Debe ingresar solo letras.');
    else {
        console.info(cadena.split(separador));
    }
}
textosSeparados('hola que tal', ' ');
*/

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/*
function stringRepeat(cadena = '', repeticiones = undefined) {
    if(typeof cadena !== 'string') return console.error('Debe ingresar solo letras.');
    else if(typeof repeticiones !== 'number') return console.error('Debe ingresar solo números.');
    else {
        return console.info(cadena.repeat(repeticiones));
    } 
}
stringRepeat('Hola Mundo', 3);
*/

// O también:

function stringRepeat(cadena = '', repeticiones = undefined) {
    if(typeof cadena !== 'string') return console.error('Debe ingresar solo letras.');
    else if(typeof repeticiones !== 'number') return console.error('Debe ingresar solo números.');
    else return console.info(Array(repeticiones).fill(cadena).join(' '));
    // El argumento repeticiones en Array(repeticiones) se utiliza para crear un array con una longitud específica.
    // fill: Llena esos espacios vacíos con el valor de cadena.
    // Une todos los elementos del array en una sola cadena, separándolos por un espacio al colocar (' ').
}
stringRepeat('Hola Mundo', 3);

// En el video 35 te doy mi solución, antes de verlo trata de resolver los ejercicios, y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el enlace de tus soluciones en los comentarios del video. 



////////////// 1)

/*
const cadena = 'Cadena de5';

function contarCadena() {
    console.log(cadena.length);
}

contarCadena();
*/

/* mejor resuelto */

/*
function contarCadena(cadena = "") {
    if(!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

contarCadena(); // esto devuelve el console.warn
contarCadena("Hola Mundo"); // devuelve el console.info
*/

/* lo mismo pero usando arrow function */
/* pero en este caso es una funcion declarada (no expresada como la del ej. de arriba), 
por lo que cuando llame a la función deberá ser debajo de la misma, sino dará error */

/*
const contarCadena = (cadena = "") =>
(!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCadena();
contarCadena("Hola Mundo");
*/



////////////// 2)

/*
const saludoCompleto = 'Hola Mundo';
const saludoRecortado = 'Hola';

function cortarSaludo() {
    console.assert(saludoCompleto.length < 4, {saludoRecortado}); // assert verifica si la condición es falsa, y si lo es, aparece el mensaje.
}

cortarSaludo();
*/

/* o también */

/*
const saludoCompleto2 = 'Hola Mundo';

function cortarSaludo2() {
    for (let i = 0; i < saludoCompleto2.length; i++) {
        // console.log(i);  // me devuelve los índices del array.
        // console.log(saludoCompleto2[i]); // me va a devolver los valores de mi array.
    
        if (i === 4) {  // break nos quitará del ciclo for cuando el indice i valga 4.
            break;
        }
        console.log(saludoCompleto2[i]);
    }
};

cortarSaludo2();
*/

/* Mejor resuelto */

/*
function cortarSaludo2(string = '', longitud = undefined) {
    if(!string) {
        console.warn("No ingresaste una cadena de texto");
    } else {
        console.info(string.slice(0, longitud)); // el metodo slice sirve para cortar una cadena de texto. 
        // (0: representa el inicio del corte - index. El segundo parámetro, en este caso "longitud", es el que indica hasta donde cortamos).
    }
}

cortarSaludo2(); // aparece el console.warn
cortarSaludo2("Hola Mundo", 4); // Se recortan los índices del 0 al 3 y aparece "Hola" en el console.info
*/

////////////// 3)

/*
const texto1 = 'Hola qué tal ';

function holaQueTal() {
    const textoFinal = [texto1 + ',' + texto1];
    console.log(textoFinal);
}

holaQueTal();
*/

/* Mejor resuelto */

/*
function holaQueTal(texto = "", espacio = undefined) {
    if(!texto) {
        console.warn("No ingresaste una cadena de texto");
    } else if (espacio === undefined) {
        console.warn("No ingresaste el caracter separador");
    } else {
        console.info(texto.split(espacio)); // El método split() en JavaScript se utiliza para dividir una cadena de texto en un array de subcadenas, 
        // utilizando un separador que se especifica como argumento. Este método no modifica la cadena original, sino que devuelve un nuevo array.
    }
}

holaQueTal('Hola que tal', ' '); // el ' ' va a buscar un espacio en el texto y ahi va a hacer la division del texto.
*/


////////////// 4 )  REVISAAAAAAAAAAR

// const hola3 = 'Hola Mundo'

// function holaMundo() {
//     console.log(hola3 + hola3 + hola3); 
// }

// holaMundo();

/*
function concatenarTexto(message = '', veces = undefined) {
    if(!message) return console.warn('Debe escribir un texto'); // con un return ya no se sigue leyendo todo el cuerpo del if.
    // los if con una sola linea pueden escribirse sin llaves.
    
    if(veces === undefined) return console.warn('No ingresaste el número de veces a repetir el texto');

    if(veces === 0) return console.error('El número de veces no puede ser 0');

    if(Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo"); // el método "sign" indica si el número es negativo (-1), 0 o positivo (1).

    for(let i = 1; i <= veces; i++) console.info(`${message}, ${i}`); // el for empieza en 1 porque necesito el numero de veces.
    
}

concatenarTexto('Hola Mundo', 3);
*/




