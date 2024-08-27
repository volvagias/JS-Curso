/* 

Cortocircuito OR || - cuando el valor de la izquierda en la expresión siempre pueda validar
a true, es el valor que se cargará por defecto.

*/

function saludar (nombre, edad) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre} tenes ${edad} años.`);
}

saludar("Leo", 26);
saludar(); // me tomará "Desconocido" porque no le estoy pasando el parámetro "nombre". Se aplica el OR.

// Estos OR toman la primera condición porque son TRUE:
console.log("cadena" || "Valor de la derecha"); // cadena
console.log(19 || "Valor de la derecha");        // 19
console.log(true || "Valor de la derecha");      // true
console.log([] || "Valor de la derecha");        // []
console.log({} || "Valor de la derecha");        // {}

// Estos OR toman la segunda condición porque la primera es FALSE:
console.log(false || "Valor de la derecha"); // Valor de la derecha
console.log(null || "Valor de la derecha");  // Valor de la derecha
console.log(undefined || "Valor de la derecha");  // Valor de la derecha
console.log("" || "Valor de la derecha");  // Valor de la derecha
console.log(0 || "Valor de la derecha");  // Valor de la derecha


/*

Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar
a false, es el valor que se cargará por defecto.

*/

console.log(false && "Valor de la derecha"); // false
console.log(true && "Valor de la derecha"); // Valor de la derecha