/* Operadores */
/* Aritméticos: + - * / % () */

let a1 = 5 + 5 - 10*3;   // resultado = -20  
let a = 5 + (5 - 10)*3;  // resultado = -10

let modulo = 5 / 2;      // resultado = 2.5
let modulo2 = 5 % 2;   // % resto de una division  // resultado = 1

/* Relacionales 
< > >= <= == === != !== */

console.log(8 > 9);  // 8 mayor que 9   ==> false
console.log(8 >= 9);  // 8 mayor o igual a 9   ==> false
console.log(7 <= 7); // 7 menor o igual a 7  ==> true

/*
=   1 igual es asignación de variable
==  2 iguales es comparación de valores
=== 3 iguales es comparación estricta de tipo de dato y de valore. 
*/

console.log(7 == 7); // true
console.log("7" == 7); // true
console.log(0 == false); // true, ya que el 0 tiende al false por defecto.

console.log("7" === 7); //false , porque la comparación estricta permite variables solo del mismo tipo.
console.log(0 == false); // false


/* Incremento Decremento */
let i = 1;

//i = i + 2;
//console.log(i); // 3

i += 3;         // i + 3 (es decir, 1 + 3) e igualo el valor a i.
console.log(i); // 4

// Operador unario
i++; // 2
// con el operador detrás, en consola aparece el valor original (1) y abajo el sumado (2). Usar esta forma que tiene menos problemas que la de abajo.

++i;
--i;
// con el operador delante, en consola aparece directamente el resultado de la operación (2).


/* Lógicos */
/*
! - Not: niega, es decir, lo que es verdadero lo vuelve falso y visceversa.
|| - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir, verdadera, el OR validará.
&& - And: Cuando tengo 2 o más condiciones todas tienen que cumplirse, es decir, ser verdaderas para que AND se valide.
*/
console.log(!true); // era true pero lo volvio false.
console.log(!false); // era false pero lo volvio true.

console.log ((9 === 9) || ("9" === 9)); // true, porque la 1ra condición se cumple.

console.log ((9 === 9) && ("9" === 9)); // false, porque todas las condiciones deben cumplirse para validar.










