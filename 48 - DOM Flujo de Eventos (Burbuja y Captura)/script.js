const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) { 
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`); // este "this" hace referencia al elemento "div" del handler de más abajo.
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
    // propagación de Burbuja.
    // div.addEventListener("click", flujoEventos, false); // al no colocar un tercer parámetro en el listener (o poniendo false), estoy en fase
    // de burbuja, es decir, la propagación se realizará desde elemento más interno del div al más general.

    // propagación de Captura.
    // div.addEventListener("click", flujoEventos, true); // la propagación se realizará desde elemento más general del div al más particular.

    div.addEventListener("click", flujoEventos, { // si quiere que mi evento se ejecute solo una vez (osea solo un click funcionará x div)
        capture: false,
        once: true  // le paso once: true.
    });
})