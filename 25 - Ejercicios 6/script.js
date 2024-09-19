// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function vocalesConsonantes(message = '') {
    if(typeof message !== 'string') return console.error('No se admiten números, solo letras.');

    // Convertir a minúsculas
    message = message.toLowerCase();

    // Definir las vocales
    let vocales = 0;
    let consonantes = 0;

    // for of
    // Recorrer la cadena y contar vocales y consonantes

    // El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. 
    // Devuelve true o false.
    for (let letra of message) {
        if(/[aeiouáéíóú]/.test(letra)) { 
            vocales++;
        } else if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }
    }

    return console.info(`Vocales: ${vocales}, Consonantes: ${consonantes}`);
}

vocalesConsonantes('Hola Mundo');

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.