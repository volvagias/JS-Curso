const numeros = [1,2,3,4,5,6,7,8,9,0];

/* break */

for (let i = 0; i < numeros.length; i++) {
    // console.log(i);  // me devuelve los índices del array del 0 al 9.
    // console.log(numeros[i]); // me va a devolver los valores de mi array. Del 1 al 0.

    if (i === 5) {  // break nos quitará del ciclo for hasta que el indice i valga 5.
        break;
    }
    console.log(numeros[i]);
}

/* continue */

for (let i = 0; i < numeros.length; i++) {

    if (i === 5) {
        continue; 
    }
    console.log(numeros[i]); // cuando i === 5, omite el indice 5 y continua con el siguiente (6).
                             // continue salta la iteración y continúa con el ciclo.
}

/* Ejercicio mostrar solo numeros impares */

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 !== 0) { // verifico si el numero es impar
        console.log(numeros[i]); // 0 al 9
    }
    
}