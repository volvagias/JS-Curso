// Las clases no reciben parámetros.

class Animal {
    // el constructor es un método especial que se ejecuta en el momento de instanciar la clase.
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    // Métodos (sí pueden recibir parámetros).
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}.`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        // con el método super() se manda a llamar el constructor de la clase padre (en este caso Animal).
        super(nombre, genero);
        this.tamanio = tamanio; // tamanio es una propiedad del Perro, por eso la creo en esta clase.
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }
}

const mimi = new Animal("Mimi", "Hembra"),
      scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.sonar(); // Va a tomar la función sonar() de la clase Perro, sobreescribiendo la de la clase Animal.
scooby.ladrar();
