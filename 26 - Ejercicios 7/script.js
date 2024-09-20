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

function valoresMaximoMinimo(array2) {
    if(!(array2 instanceof Array)) return console.error('Debe ingresar un arreglo.');

    let newArray = [];

    newArray.push(Math.max(...array2)); // Es equivalente a Math.max(1, 4, 5, 99, -60). Se usa el spread operator porque el Math.max o min no acepta arrays como argumento.
    newArray.push(Math.min(...array2));    

    return console.info(newArray);
}

valoresMaximoMinimo([1, 4, 5, 99, -60]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function arrayDeNumerosParesImpares(array3) {
    if(!(array3 instanceof Array)) return console.error('Debe ingresar un arreglo.');

    let newArray = { 
        pares: [],
        impares: [] 
    };

    for (let i = 0; i < array3.length; i++) {
        // Si el número es impar
        if(array3[i] % 2 !== 0) {
            newArray.impares.push(array3[i]);
        } else {
            newArray.pares.push(array3[i]);
        }
    }

    return console.info(newArray);
}

arrayDeNumerosParesImpares([1,2,3,4,5,6,7,8,9,0]);