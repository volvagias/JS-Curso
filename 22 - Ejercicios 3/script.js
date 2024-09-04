// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/*
function obtenerNumero() {
    return console.log (Math.round(Math.random() *100) + 501);
}
obtenerNumero();
*/

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


function esCapicua(numero = 0) {
    if(!numero) return console.error("Debe ingresar un número");
    if(typeof numero !== "number") return console.error (`El valor "${numero}" ingresado NO es un número.`);

    numero = numero.toString();

    const izqDer = numero;
    const derIzq = numero.split('').reverse().join('');


    if(izqDer !== derIzq) return console.log(false)
    if(izqDer === derIzq) return console.log(true);
}
esCapicua(505);


// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
// no lo voy a hacer.
