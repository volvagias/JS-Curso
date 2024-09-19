// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function montoConDescuento(cantidad = undefined, descuento = undefined) {
    return console.info((cantidad * descuento) / 100);
}

montoConDescuento(1000, 20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

let fecha = new Date;
console.log(fecha);

function cuantosAños(fechaUsuario = new Date) {

    const fechaDada = fechaUsuario.getFullYear();

    let fecha = new Date;

    const fechaActual = fecha.getFullYear();

    return console.info(fechaActual - fechaDada);
}

cuantosAños(new Date(1993,12,20));

