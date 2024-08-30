// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirString(texto = '', separador = undefined) {
    if(!texto) return console.warn("Tiene que ingresar un texto.");
    if(texto) return console.info(
        texto.split(' ')
             .map(palabra => palabra.split('').reverse().join(''))
             .reverse()
             .join(separador)); 
    // Primero separo las palabras del string 'texto' en un Array de subcadenas (cuando haya un espacio) con el metodo 'split'.
    // Después, cuando ya está el string en arrays, a través del método 'map' (que me permite aplicar una función a cada elemento del array original, cada letra), invierto cada letra individualmente.
    // Luego como cada palabra está separada en un array, puedo hacer un reverse para invertir el orden de las mismas.
    // Y con el método 'join' puedo volver a unir cada elemento del array en una sola cadena de texto.
}

invertirString("Hola Mundo", " ");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contarVeces(texto = '', palabraRepetida = undefined) {
    if(!texto) return console.warn("Tiene que ingresar un texto.");
    if(palabraRepetida === undefined) return console.warn("Tiene que ingresar una palabra.");

    const result = texto
                   .split(' ')
                   .filter((palabra) => palabra === palabraRepetida);
    
    console.info(result.length);
}
contarVeces('hola mundo adios mundo', 'mundo');

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.