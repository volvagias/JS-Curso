/* Método forEach 
El método forEach en JavaScript es utilizado para ejecutar una función específica una vez por cada elemento de un array.
Es una forma de iterar sobre los elementos de un array de manera más concisa que un bucle for. */

const colores = ["Rojo", "Azul", "Amarillo"];
colores.forEach(function (element, index) { // el primer parametro es el valor, el segundo el id SIEMPRE
    console.log(`<li id=${index}>${element}</li>`);
});

/*
- forEach no modifica el array original.
- No hay forma de detener o salir del bucle forEach antes de que termine de recorrer todo el array (a diferencia de un bucle for con una declaración break).
- Si necesitas romper el bucle, podrías considerar otros métodos de iteración como for, for...of, o Array.prototype.some.
*/ 