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



