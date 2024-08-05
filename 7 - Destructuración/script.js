const numeros = [1,2,3];

// Sin destructuración //
let uno = numeros[0];
    dos = numeros[1];
    tres = numeros[2];

console.log(uno,dos,tres); // 1,2,3

// Con destructuración // creas dinámicamente las variables
/* Ejemplo 1 */
const [one,two,three] = numeros;
console.log(one,two,three); // 1,2,3

/* Ejemplo 2 */
const persona = {
    nombre: "Leonel",
    apellido: "Bruzzese",
    edad: 30
}

let {nombre,apellido,edad} = persona; 
console.log(nombre,apellido,edad) // Leonel Bruzzese 30


