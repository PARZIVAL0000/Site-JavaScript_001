// Variables
var producto = 'Audifonos Gamers'; //Iniciar variable y asignarle un valor.

//pueden ser creadar al principio sin ningun valor.
var nuevo_Valor;
var second_Valor;
var dandoAlcande = 1;

//Le damos ya valor de las variables ya antes designadas.
nuevo_Valor = 0;
second_Valor = 10;
while(nuevo_Valor <= second_Valor){
    console.log(nuevo_Valor);
    nuevo_Valor += dandoAlcande;
}

console.log("Fin del conteo...", nuevo_Valor);




//Hay momentos en que no es recomendable reasignar una variable.

/**
    En un lenguaje de tipo dinámico, guarda el tipo de dato en el valor que tiene y no en la variable.
 */


var computadora1 = "Nueva",
    colores1 = "Rojos",
    audifonos1 = 20,
    cables1 = 33.0;

console.log(computadora1);


for(let i = 0; i < computadora1.length; i++){
    console.log(computadora1[i]);
}


// ESTILOS PARA LAS VARIABLES...
var nombre_producto = 'memoria Flash'; //underscode.
var nombreProducto = 'Monitor HD'; //Camel Case.
var NombreProducto = 'Probook HP'; //Pacal Case. 


