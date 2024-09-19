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

function validarNombre(nombre = '') {
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓúÜü\s]+$/.test(nombre); // contempla de la letra "a" a la "z" (minúsculas y mayúsculas), demás cosas que agregué también como la Ñ.
    // el \s es que permite espacios.

    return(expReg)
        ? console.info(`${nombre}, es un nombre válido.`)
        : console.error(`${nombre}, no es un nombre válido.`);
}

validarNombre('Jonathan MirCha'); // true
validarNombre('Jonathan_++ MirCha'); // false

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function validarEmail(email = '') {
    let expRegEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

    return(expRegEmail)
        ? console.info(`${email}, es un email válido.`)
        : console.error(`${email}, es un email inválido.`);
}

validarEmail('leonel.bruzzese@gmail.com');
validarEmail('leonel.b ruzzese@gmail.com');