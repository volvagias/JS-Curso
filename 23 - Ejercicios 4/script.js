// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function esPrimo(numero = undefined) {
    if(numero === undefined) return console.error("Debe ingresar un número");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un número.`);
    if(numero === 0 | numero === 1) return console.error("El número no puede ser 0 o 1.");
    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo.");

    let divisible = false;

    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            divisible = true;
            break;
        }
    }

    return(divisible) 
        ? console.log(`El número ${numero} NO es primo`)
        : console.log(`El número ${numero} SÍ es primo.`);
}
esPrimo(3);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function parImpar(numero = undefined) {
    if(numero === undefined) return console.error("Debe ingresar un número");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un número.`);
    if(numero === 0) return console.error("El número no puede ser un 0.")
    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo.");

    // Si el número es impar
    if(numero % 2 !== 0) {
        return console.info(`El número ${numero} es impar`);
    } else {
        return console.info(`El número ${numero} es par`);
    }
}

parImpar(2);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// no lo haré.