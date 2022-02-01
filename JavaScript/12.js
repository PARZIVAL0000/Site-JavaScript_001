const meses = ["Enero", "Febrero", "Marzo", "Abril"];

const carritoCompras = [
    {nombre: "Monitor 20 pulgadas", precio: 200},
    {nombre: "Celular", precio: 100},
    {nombre: "Tablet de HD", precio: 400},
    {nombre: "Audifonos Gamers", precio: 300},
    {nombre: "Computadora de Escritorio", precio: 500},
    {nombre: "Grampadora", precio: 20},
    {nombre: "Cafetera", precio: 500},
    {nombre: "Lapicero", precio: 10},
    {nombre: "Carpetera", precio: 5},
    {nombre: "Estante", precio: 6000},
    {nombre: "Lampara", precio: 600},
];


//---> forEach <---
// meses.forEach(function(meses){
//     console.log(meses);
//     if(meses === "Marzo"){
//         console.log(`Si Existe ${meses}`);
//     }
// });



// --> Include <-- equivalente al anterior metodo forEach.

const Resultado = meses.includes('Enero');

console.log(Resultado);

// --> Some <-- Ideal para arreglo de Objetos. 

let Resultado2 = carritoCompras.some((producto)=> producto.nombre === "Lapicero");

console.log(Resultado2);


// --> Reduce <-- Ideal para Hacer una operacion de numeros que poseemos en nuestro arreglo.

let Resultado3 = carritoCompras.reduce((total,producto)=> total + producto.precio,0);

console.log(Resultado3); //Nos entrega un valor de --8635--.



//  --> Filter <-- Podemos usar para filtrar elementos que queramos, de un arreglo. 

let Resultado4 = carritoCompras.filter(function(producto){
    return producto.nombre !== "Computadora de Escritorio" && producto.nombre !== "Celular";
})

console.log(Resultado4);