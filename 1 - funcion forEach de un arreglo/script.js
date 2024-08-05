const colores = ["Rojo", "Azul", "Amarillo"];
colores.forEach(function (element, index) { // el primer parametro es el valor, el segundo el id SIEMPRE
    console.log(`<li id=${index}>${element}</li>`);
});
