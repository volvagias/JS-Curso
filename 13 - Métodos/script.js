class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}.`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }

    // Método estático: es aquél que se puede ejecutar sin necesidad de instanciar la clase.
    static queEres() {
        console.log("Los perros somos animales mamíferos.")
    }

    /* Los setters y getters son métodos especiales que nos permiten establecer y obtener valores de
    atributos de nuestra clase. */

    // Usando el getter para obtener la raza (la cual no está definida).
    get getRaza() {
        return this.raza;
    }

    // Usando el setter para cambiar la raza.
    set setRaza(raza) {
        this.raza = raza;
    }
}

const mimi = new Animal("Mimi", "Hembra"), // nueva instancia de Animal.
      scooby = new Perro("Scooby", "Macho", "Gigante");

Perro.queEres(); // como es estático el método o función, no hace falta instanciar la clase como se vio en el capítulo anterior.

console.log(scooby.getRaza); // null
scooby.setRaza = "Gran Danés"; // acá utilizo el setter.
console.log(scooby.getRaza); // Gran Danés