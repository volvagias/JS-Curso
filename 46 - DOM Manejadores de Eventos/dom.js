function holaMundo() {
    alert("Hola Mundo");
    console.log(Event); 
    // la palabra reservada event se puede usar para inspeccionar el evento en el inspector.
    // esta palabra se puede usar en todos las funciones que tengan un evento. En este caso el onclick.
}

// se suele colocar $ para identificar a la variable como elemento del DOM. En este caso es una id del DOM.
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo; // sin paréntesis porque es un evento semántico.

$eventoSemantico.onclick = function (e) { // esta funcion reemplaza la anterior de la linea 10. Caracteristica de los eventos semanticos.
    alert("Hola, Manejador de Eventos Semántico");
    console.log(e);
}

// evento con manejador múltiple (Ejecutar varias funciones)
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {          // a diferencia del evento semantico. Este no reemplaza al anterior.
    alert("Hola Mundo Manejador de Eventos Múltiple");      // es decir, se ejecuta un evento tras el otro.
    console.log(e.type); // con esto puedo ver qué tipo de evento es.
    console.log(e.target); // con esto puedo ver qué origina al evento.
    console.log(event); // ves todas las propiedades del evento.
});

// En Angular es más sencillo:
/*
    <button (click)="primeraFuncion(); segundaFuncion()">Click aquí</button>

    export class AppComponent {
        primeraFuncion(): void {
        console.log('Primera función ejecutada');
    }

    segundaFuncion(): void {
        console.log('Segunda función ejecutada');
    }
   
    =====================================================================

    o también y mejor:

    <button (click)="manejarEvento($event)">Click aquí</button>

    export class AppComponent {
        manejarEvento(event: MouseEvent): void {
            this.primeraFuncion();
            this.segundaFuncion();
            console.log('Evento manejado:', event);
        }

        primeraFuncion(): void {
            console.log('Primera función ejecutada');
        }

        segundaFuncion(): void {
            console.log('Segunda función ejecutada');
        }
    }

*/