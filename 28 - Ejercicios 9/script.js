/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/


class Pelicula {
    constructor(id, title, director, year, country, genre, calification) {

        // validaciones
        if(!this.validarId(id)) return console.error('ID inválido.'); // id
        if(title.length > 100) return console.error('El título no puede contar con más de 100 caracteres.'); // title
        if(director.length > 50) return console.error('El nombre del Director no puede superar los 50 caracteres.'); // director
        if(!this.numeroEntero(year)) return console.error('El año debe ser un número entero.'); // year
        if(!(country instanceof Array)) return console.error('El país o países deben ser de tipo Arreglo.'); // country
        if(!(genre instanceof Array)) return console.error('El género o géneros deben ser de tipo Arreglo.'); // genre
        
        if (!genre.every(g => Pelicula.generosAceptados.includes(g))) return console.error('El género escrito es inválido.');
        // every(): Este método verifica que todos los géneros en el array genre cumplan con la condición que le pasemos.
        
        /* g => this.generosAceptados().includes(g): Para cada género g en el array genre, 
        estamos verificando si está presente en el array de géneros aceptados. */

        this.validarCalificacion(calification); // calification
        

        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.calification = calification;
    }

    static generosAceptados = [ 'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 
    'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 
    'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western' ];

    validarId(id) {
        return /^[a-zA-Z]{2}\d{7}$/.test(id);
    }

    numeroEntero(year) {
        return /^\d{4}$/.test(year); // \d (Representa cualquier dígito (es equivalente a [0-9]).)
        // {4}  Indica que debe haber exactamente 4 dígitos.
    }

    static generosCorrectos() {     // Crea un método estático que devuelva los géneros aceptados*.
        return this.generosAceptados;
    }


    // Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    // decimal de una posición.
    validarCalificacion(calification) {

        if(typeof calification !== 'number') return console.error('Debe ingresar sólo números. No están permitidas letras.');

        let calificationStr = calification.toString();
        let numerosAceptados = /^(10(\.0)?|[0-9](\.[0-9])?)$/.test(calificationStr);

        if (!(numerosAceptados && (calification >= 0 && calification <= 10))) return console.error('La calificación debe ser del 0 al 10.'); 
        
        return calification;
    }
    
    // Crea un método que devuelva toda la ficha técnica de la película.

    fichaTecnica() {
        return `
        Título: ${this.title},
        Director: ${this.director},
        Año: ${this.year},
        País: ${this.country},
        Género: ${this.genre},
        Calificación: ${this.calification}
        `
    }
}

peliculas = [
    {
        id: "tt1234567",
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        country: ["USA", "UK"],
        genre: ["Action", "Sci-Fi"],
        calification: 8.8
    },
    {
        id: "tt2345678",
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        country: ["USA"],
        genre: ["Crime", "Drama"],
        calification: 9.2
    },
    {
        id: "tt3456789",
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        country: ["USA", "UK"],
        genre: ["Action", "Thriller"],
        calification: 9.0
    }
]

/* Apartir de un arreglo con la información de 3 películas genera 3 
instancias de la clase de forma automatizada e imprime la ficha técnica 
de cada película. */

// Crear instancias y mostrar ficha técnica
peliculas.forEach(({ id, title, director, year, country, genre, calification }) => {
    const pelicula = new Pelicula(id, title, director, year, country, genre, calification);
    console.log(pelicula.fichaTecnica());
})







