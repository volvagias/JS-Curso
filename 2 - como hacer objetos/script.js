const leo = {
    nombre: "Leonel",
    apellido: "Bruzzese",
    edad:30,
    pasatiempos: ["Dibujar", "Jugar", "Ver Cine"],
    estadoCivil: true,
    contacto: {
        email: "leonel.bruzzese@gmail.com",
        movil: "1160146429"
    },
    saludar:function() {      // Se puede agregar una funcion/método a un objeto.
        console.log('Hola');
    },
    decirMiNombre: function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi email es ${this.contacto.email}`)
    }
}

console.log(leo);

console.log(leo["nombre"]);
console.log(leo.nombre);

console.log(leo["apellido"]);       // Se puede escribir de ambas formas.
console.log(leo.apellido);

console.log(leo["pasatiempos"]);
console.log(leo.pasatiempos);
console.log(leo["pasatiempos"][0]);
console.log(leo.pasatiempos[0]);

console.log(leo["pasatiempos"][1]);
console.log(leo["pasatiempos"][2]);

console.log(leo["contacto"]);
console.log(leo.contacto);
console.log(leo.contacto.email);

leo.saludar();
leo.decirMiNombre();

console.log(Object.keys(leo));  // keys es un metodo de Object que me permite listar todas las llaves/PROPIEDADES del objeto.
console.log(Object.values(leo)); // values me va a formar un arreglo con los VALORES.
console.log(leo.hasOwnProperty("nombre")); // dará true porque el objeto "leo" tiene una propiedad llamada "nombre".