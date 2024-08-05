// sin las nuevas funcionalidades de JS:
let nombre = 'kEnAi',
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
        console.log("guau!");
    }
}

console.log(perro);
perro.ladrar();

/* con las nuevas funcionalidades de JS se puede resumir
la declaración del objeto: */

const dog = {
    nombre, // esto es igual a nombre: nombre
    edad,
    raza: "callejero", // como no está declarada la propiedad "raza", la puedo crear comunmente como se hacía antes.
    ladrar() {         // se puede eliminar la palabra "function".
        console.log("guau guau");
    }
}

console.log(dog);