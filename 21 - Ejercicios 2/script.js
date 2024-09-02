// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

/*
function invertirString(texto = '') {
    if(!texto) return console.warn("Tiene que ingresar un texto.");
    if(texto) return console.info(
        texto.split("").reverse().join("")); 
    // Primero separo las palabras del string 'texto' en un Array de subcadenas (cuando haya un espacio) con el metodo 'split'.
    // Luego como cada palabra está separada en un array, puedo hacer un reverse para invertir el orden de las mismas.
    // Y con el método 'join' puedo volver a unir cada elemento del array en una sola cadena de texto.
}


invertirString("Hola Mundo");
*/

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/*
function contarVeces(texto = '', palabraRepetida = undefined) {
    if(!texto) return console.warn("Tiene que ingresar un texto.");
    if(palabraRepetida === undefined) return console.warn("Tiene que ingresar una palabra.");

    const result = texto.split(' ').filter((palabra) => palabra === palabraRepetida);
    
    console.info(result.length);
}
contarVeces('hola mundo adios mundo', 'mundo');
*/

/* Otra forma de resolvero pero en loop, de forma constante y no una sola vez como el anterior.*/

/*
function contarVeces(textito = '', palabraRepetida = undefined) {
    if(!textito) return console.warn("Tiene que ingresar un texto.");
    if(palabraRepetida === undefined) return console.warn("Tiene que ingresar una palabra.");

    let i = 0,
        contador = 0;
    
    // en while la condicion se tiene que cumplir antes de ejecutar nada.
    while (i !== -1) { // -1 porque el indexOf si no encuentra el texto devuelve un -1.
        i = textito.indexOf(palabraRepetida, i); 
        // parámetros: palabra a buscar, índice por el que se comienza la búsqueda.
        // El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, 
        // ó retorna -1 si el elemento no esta presente.

        if (i !== -1) {
            i++;         
            contador++;
        }
    }    
    return console.info(`La palabra ${palabraRepetida} se repite ${contador} veces.`);    
}

contarVeces('hola mundo adios mundo', 'mundo');
*/

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

/*
function esPalindromo(frase = '') {
    if(!frase) return console.warn("Tiene que ingresar una frase.");

    frase = frase.toLowerCase(); // Paso todo a minúsculas lo que escriba el usuario por si coloca una mayúscula.

   const izqDer = frase;

   const derIzq = frase.split('').reverse().join('');

   if(izqDer !== derIzq) return console.log(false)
   if(izqDer === derIzq) return console.log(true);
}

esPalindromo('Salas');
*/

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// Forma básica de resolverlo.
function eliminarPatron(texto = '') {
    console.info(texto.slice(3, texto.length));
}

eliminarPatron('xyz1');

// Mejor.
function eliminarCaracteres(textito = '', patron = '') {
    if(!textito) console.warn("No ingresaste el texto");
    
    if(!patron) console.warn("No ingresaste un patrón de caracteres");
    else console.info(textito.replace(new RegExp(patron, "ig"), ""));
    // replace: primer parámetro el valor a buscar, segundo con qué lo reemplazaremos.
    // new RegExp() porque usaré expresiones regulares. Le paso el 1ER PÁRAMETRO de búsqueda a reemplazar.
    // flags: i (busca por mayúsculas y minúsculas), g (no se detiene en la primer coincidencia, busca todas.)
    // 2DO PARÁMETRO "" vacío porque no quiero que me lo reemplace por nada en específico.
}

eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');