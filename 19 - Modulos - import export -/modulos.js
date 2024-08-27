// en este ejercicio hacer pruebas con el live Server (sino no funca).
// Modulos (reemplazaron a las Funciones Anónimas Autoejecutables).

import saludar, { PI, usuario } from './constantes.js'; // importo lo que necesito usar.
import { aritmetica as calculos } from './aritmetica.js'; // el "as" es colocar un alias para llamarlo en este modulo como yo quiera. Está bueno por si tenes una variable muy larga y te da pereza escribir tanto.

console.log(PI, usuario);
//console.log(aritmetica.sumar(2,2), aritmetica.restar(10,5));
console.log(calculos.sumar(2,2), calculos.restar(10,5)); // acá estoy usando el alias que declaré más arriba en los imports.
saludar();