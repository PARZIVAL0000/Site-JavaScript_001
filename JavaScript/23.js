//For Loops

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 100; i++){
//     if(i%2 == 0){
//         console.log(`El numero es par: ${i}`);
//     }else{
//         console.log(`Los numeros impares son >>>${i}<<<`);
//     }
// }


// const carritoCompras = [
//     {nombre: "Monitor 20 pulgadas", precio: 200},
//     {nombre: "Celular", precio: 100},
//     {nombre: "Tablet de HD", precio: 400},
//     {nombre: "Audifonos Gamers", precio: 300},
//     {nombre: "Computadora de Escritorio", precio: 500},
//     {nombre: "Grampadora", precio: 20},
//     {nombre: "Cafetera", precio: 500},
//     {nombre: "Lapicero", precio: 10},
//     {nombre: "Carpetera", precio: 5},
//     {nombre: "Estante", precio: 6000},
//     {nombre: "Lampara", precio: 600},
// ];

// for(let i = 0; i < carritoCompras.length; i++){
//     console.log(carritoCompras[i].nombre);
//     console.log(carritoCompras[i].precio);
// }


/**
 -----> WHILE <-----
 */


// let i = 1; //indice
// while(i <= 100){ //condicion

//     if(i%2 === 0){
//         console.log(`Valores Pares >>>>${i}<<<<`);
//     }else{
//         console.log(`Valores Impares >>>>${i}<<<<`);
//     }
//     i += 1; //incremento
// }


// const carritoCompras = [
//     {nombre: "Monitor 20 pulgadas", precio: 200},
//     {nombre: "Celular", precio: 100},
//     {nombre: "Tablet de HD", precio: 400},
//     {nombre: "Audifonos Gamers", precio: 300},
//     {nombre: "Computadora de Escritorio", precio: 500},
//     {nombre: "Grampadora", precio: 20},
//     {nombre: "Cafetera", precio: 500},
//     {nombre: "Lapicero", precio: 10},
//     {nombre: "Carpetera", precio: 5},
//     {nombre: "Estante", precio: 6000},
//     {nombre: "Lampara", precio: 600},
// ];


// let i = 0;
// while(i < carritoCompras.length){

//     console.log(carritoCompras[i].nombre);
//     console.log(carritoCompras[i].precio);
//     i++
// }

let i = 0;
do{
    console.log(i);
    i++;
    
}
while(i <= 10);