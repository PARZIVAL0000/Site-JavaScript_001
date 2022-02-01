// LET

//Nuevas alternativas para poder crear una variable mucho mas dinamicas.

// Variables
let producto = 'Audifonos Gamers'; //Iniciar variable y asignarle un valor.

//pueden ser creadar al principio sin ningun valor.
let nuevo_Valor;
let second_Valor;
let dandoAlcande = 1;

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


let computadora1 = "Nueva",
    colores1 = "Rojos",
    audifonos1 = 20,
    cables1 = 33.0;

console.log(computadora1);


for(let i = 0; i < computadora1.length; i++){
    console.log(computadora1[i]);
}


// ESTILOS PARA LAS VARIABLES...
let nombre_producto = 'memoria Flash'; //underscode.
let nombreProducto = 'Monitor HD'; //Camel Case.
let NombreProducto = 'Probook HP'; //Pacal Case. 

