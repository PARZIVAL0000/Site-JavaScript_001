// Arreglo

// const numeros = [10,20,30,40,50];

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }
// console.log("Su extension es : ",numeros.length);
// console.table(numeros);

// numeros[0] = 100;
// console.log(numeros[0]);




// const arreglo = [
//     "Dennys",
//     16,
//     "Azul",
//     [1,2,3],
//     {
//         colorFavorito : "Azul Intenso",
//         peliculaFavorita : "Blade Runner"
//     },
//     null,
//     true,
// ]
// console.log(arreglo);
// // ----------------------------------

// const frutas = new Array("Manzana", "Pera", "Sandia");
// console.log(frutas);


// // Haciendolo Con Un Constructor. 

// const valor = new Array(2);
// valor[0] = "Lunes";
// valor[1] = "Viernes";

// console.table(valor);

// if(valor[0] === "Lunes"){
//     console.log(true);
// }else{
//     console.log(false);
//     if(valor[1] === "Viernes"){
//         console.log("Es Lunes");
//     }else{
//         console.log("Es El Ultimo.");
//     }
// }



// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo ", "Junio", "Julio ", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


// // COMO AGREGAR NUEVOS ELEMENTOS

// meses.push("FIN DEL AÑO"); //agrega al final del arreglo
// meses.unshift("INICIO DEL AÑO"); //agrega al inicio del elemento.


// //COMO QUITAR ELEMENTOS.
// meses.pop();//elimina el final del elemento
// meses.shift();//elimina el inicio del elemento.


// //Podemos eliminar elementos albitrarios. 
// meses.splice(6, 1);
// meses.forEach(function(n){
//     console.log(n);
// })






// Podemos crear otro arreglo para poder poner los valores
// existentes de otro arreglo. 

let Valores = ["1", "2", "3", "4", "5"];

let NewValores = [...Valores, "6"];
console.log(NewValores);