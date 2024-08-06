/* Parámetros REST 
Para definir argumentos de cantidad indefinida de un array */

function sumar (a, b, ...c) {
    let resultado = a + b;

    // todo valor que llegue a partir de "c" lo voy a tratar como un arreglo, por eso usaré un forEach.
    
    c.forEach(function (n) {
        resultado += n
    })

    // Lo mismo pero con arrow function o función flecha.
    // c.forEach(n => resultado += n);

    return resultado;
}

/* Operador Spread */

const arr1 = [1, 2, 3, 4, 5],
arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2); /* Me devuelve dos arreglos por separado */

/* Supongamos que tengo que crear un tercer arreglo a partir de estos dos: */

const arr3 = [...arr1, ...arr2]; 
console.log(arr3);       /* Ahora me devuelve los dos arreglos como si fuese solo uno */




