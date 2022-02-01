
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




// ForEach -> Solo en arreglos.

carritoCompras.forEach(n => console.log(n.precio));


// MAP

let NuevoValor = carritoCompras.map(valor => `${valor.nombre} : ${valor.precio}`);

console.log(NuevoValor);