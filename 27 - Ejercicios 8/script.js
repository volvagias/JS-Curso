// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

function arrayAscDesc(array) {
    if(!(array instanceof Array)) return console.error("Debe ingresar un array de números.");

    let newArray = {
        ascendente: [],
        descendente: []
    };

    /* El operador spread ([...]) en tu código es necesario para crear una copia del array original antes de ordenarlo. 
    El método sort en JavaScript modifica el array en su lugar (es decir, cambia el array original en vez de crear uno nuevo). 
    Si no haces una copia, el segundo sort afectará el resultado del primero porque ambos estarían actuando sobre el mismo array. */

    const asc = [...array].sort((a, b) => a - b);
    const desc = [...array].sort((a, b) => b - a);

    newArray.ascendente = asc;
    newArray.descendente = desc;

    return console.info(newArray);
}

arrayAscDesc([7, 5, 7, 8, 6]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

function eliminarDuplicados(array2) {
    if(!(array2 instanceof Array)) return console.error("Debe ingresar un array de elementos.");

    newArray2 = [];

    for (let i = 0; i < array2.length; i++) {
        if(!(newArray2.includes(array2[i]))) {
            newArray2.push(array2[i]);
        }
    }
    return console.info(newArray2);
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// no se que es promedio.