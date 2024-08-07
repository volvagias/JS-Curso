// POO (Programación Orientada a Objetos).

/*
Clases - Modelo a seguir.
Objetos - Es una instancia de una clase (una copia de ese modelo).
    Atributos - Característica o Propiedad del objeto (son variables dentro de un objeto).
    Métodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto).
*/

// Función constructora.
function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre; // this.nombre va a recibir el valor del primer argumento de la función.
    this.genero = genero;
}

/* Métodos agregados al prototipo de la función constructora. Al hacerlo fuera de la función, cada vez
que haga una nueva instancia de Animal (como se ve más abajo) no se asignará a cada nueva instancia este console.log,
sino a la función constructora. */ 

Animal.prototype.sonar = function() { 
    console.log ("Hago sonidos");
}

// creo una nueva instancia de la funcion Animal y le paso parámetros personalizados. Sirve para mejorar el rendimiento de mi página.
const snoopy = new Animal("Snoopy","Macho"),
      lolaBunny = new Animal ("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
lolaBunny.sonar();

/* Entonces la función constructora me sirve para no estar haciendo copy paste y creando varios objetos. 
En su lugar creo nuevas instancias de esos objetos o funciones y les paso nuevos parámetros. */


// Herencia Prototípica.
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

Perro.prototype = new Animal();

