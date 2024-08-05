let contador = 0;

while(contador < 10) {
    console.log(contador);
    contador++;
}

// en while la condicion se tiene que cumplir antes de ejecutar nada.
// mientras contador sea menor a 10, sumame de a 1 la variable contador. Llegará a valer máximo 9.

do {
    console.log("do while" + contador);
    contador++;
} while (contador < 10);

// en do while la 1ra vez se va a ejecutar todo el bloque y luego se verifica la condicion.

//=========================================================================================================================
/* for , se suele utilizar en lugar de while y do actualmente para iterar ARRAYS */ 

// for(inicialización de la variable; condición; decremento o incremento) {
//     sentencias que ejecuta el for;
// }

// Devuelve valores numéricos.


for (let i = 0; i < 10; i++) {
    console.log("for" + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//=========================================================================================================================
/* forin */
/* es un for especial para objetos - itera todas las propiedades de los OBJETOS */
/* Devuelve propiedades y valores */

const leonel = {
    nombre: "Leonel",
    apellido: "Bruzzese",
    edad: 35
}

for (const loQueQuieras in leonel) {
    console.log(`Key o propiedad:${loQueQuieras}, Value:${leonel[loQueQuieras]}`);
}

//=========================================================================================================================
/* forof */
/* permite recorrer todos los elementos de cualquier objeto que sea iterable en JS */
/* Devuelve valores */

for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola Mundo";

for (const caracter of cadena) {
    console.log(caracter);
}