// Funciones que Retornan Valores

// function Sumar(n1, n2){
//     return n1 + n2;
// }

// const valores = Sumar(2,3);
// console.log(valores);


let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function CalculandoImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);

const TotalAPagar = CalculandoImpuesto(total);
console.log(`El Total A Pagar: ${TotalAPagar}`);