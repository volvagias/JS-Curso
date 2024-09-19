// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function elevarAlCuadrado(array) {
    if(!Array.isArray(array)) return console.error('Debe ingresar un arreglo.');
    
    // también es válido:

    // if(!(array instanceof Array)) return console.error('Debe ingresar un arreglo.');

    let valorFinal = [];

    for (let i = 0; i < array.length; i++) {    
        valorFinal.push(array[i] * array[i]); // el método push añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    }

    return console.info(valorFinal);
}

elevarAlCuadrado([1, 4, 5]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.