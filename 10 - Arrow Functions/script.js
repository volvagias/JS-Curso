// Sin arrow function.

const Hola = (function (nombre) {
    console.log (`Hola ${nombre}`);
})
Hola("José");

// Con arrow function.

const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Irma");

// si la función flecha no recibe parámetros se tiene que poner igual los "()".
/*
const saludar = () => console.log(`Hola`);
saludar();
*/

// Importante: las Arrow Functions traen un return implícito con =>.

// Cuando hay más de una instruccion las Arrow Functions deben llevar las llaves {}.
const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
}
funcionDeVariasLineas();

// Pasando un forEach a una Arrow Function:
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(element, index) {   // sin Arrow Function
    console.log(`El elemento ${el} está en la posición ${index}.`)
})

// con Arrow Function (puedo omitir las llaves al ser solo una instrucción).
numeros.forEach((element, index) => console.log(`El elemento ${el} está en la posición ${index}.`));

// Con más de una instrucción lleva llaves.
numeros.forEach((element, index) => {
    console.log(`El elemento ${el} está en la posición ${index}.`)
    console.log("Hola");
}); 



