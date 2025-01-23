function holaMundo() {
    alert("Hola Mundo");
    console.log(Event);
}

function saludar(nombre = "Desconocid@") { 
    alert(`Hola ${nombre}`);
}

// Cualquier Evento puede recibir como parámetro únicamente el evento en sí (e).

// evento con manejador múltiple (Ejecutar varias funciones)
const $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {          // a diferencia del evento semantico. Este no reemplaza al anterior.
    alert("Hola Mundo Manejador de Eventos Múltiple");      // es decir, se ejecuta un evento tras el otro.
    console.log(e.type); // con esto puedo ver qué tipo de evento es.
    console.log(e.target); // con esto puedo ver qué origina al evento.
    console.log(event); // ves todas las propiedades del evento.
});
// $eventoMultiple.addEventListener("click", saludar); // imprimirá Hola [object MouseEvent] porque el manejador de Eventos...
// no puede recibir parámetros más que el (e) evento en sí.

//$eventoMultiple.addEventListener("click", () => saludar()); // con arrow function o my function sí se puede pasar parámetros.
// pero esta vez la función saludar debe tener paréntesis porque ya no es la manejadora del evento.

// REPITO solo con arrow function o my function puedo pasar parámetros en manejadores de eventos o handlers.
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Leonel");
});

// ==========================================================================

// Podemos también ELIMINAR elementos de un EVENTO (solo con eventos de manejadores múltiples).

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick); // le paso como segundo parámetro la función.
    $eventoRemover.disabled = true; // es un atributo HTML. Deshabilito el botón visualmente.
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);
// cuando haga doble click en el botón se ejecutará una vez el evento. Cuando quiera hacer doble click nuevamente,
// no surgirá efecto ya que eliminé el evento.
