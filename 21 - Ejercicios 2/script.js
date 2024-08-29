// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirString(texto = '') {
    if(!texto) return console.warn("Tiene que ingresar un texto.");
    if(texto) return console.info(
        texto.split(' ')
             .map(palabra => palabra.split('').reverse().join(''))
             .reverse()
             .join()); 
    // Primero separo las palabras del string 'texto' en un Array de subcadenas (cuando haya un espacio) con el metodo 'split'.
    // Después, a través del método 'map' (que me permite aplicar una función a cada elemento del array original), invierto cada palabra individualmente.
    // Luego como cada palabra está separada en un array, puedo hacer un reverse para invertir el orden de las mismas.
    // Y con el método 'join' puedo volver a unir cada elemento del array en una sola cadena de texto.
}

invertirString("Hola Mundo");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.