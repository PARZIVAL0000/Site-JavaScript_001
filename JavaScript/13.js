// FUNCIONES JAVASCRIPT


//Declaraciones de Funciones.
function Valor(){
    console.log("Este es un paso de Tiempo distinto.");
}
Valor();


//Expresion de la Funcion
let DeclarandoValor = function(n){
    return n * 2;
}
console.log(DeclarandoValor(2));


// IIFE
(function(n){
    console.log(`Este Es Un Espacio Temporal Del ${n}`)
})("Tiempo");





nuevoValor("Dennys", "Juan", "Carlos");

function nuevoValor(x, y, z){
    console.log(`Su nombre es ${x}. Su amigo es ${y}. Su enemigo es ${z}`);
}


