/* 

Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar
a true, es el valor que se cargará por defecto.

Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar
a false, es el valor que se cargará por defecto.

*/

function saludar (nombre, edad) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre} tenes ${edad} años.`);
}

saludar("Leo", 26);
saludar(); // me tomará "Desconocido" porque no le estoy pasando el parámetro "nombre". Se aplica el OR.