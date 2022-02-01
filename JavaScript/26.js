// PROGRAMACION ORIENTADO A OBJETO

//------------------------------------------------------------------
// Object Literal
//------------------------------------------------------------------
const producto = {
    nombre : 'tablet',
    precio : 500,
}
console.log(producto);

//-------------------------------------------------------------------
// Object Constructor
//--------------------------------------------------------------------

function Producto(nombre, precio, disponible){
    this.nombre = nombre; 
    this.precio = precio; 
    this.disponible = disponible;
}


let producto2 = new Producto("Computadora", 1200, false);
let producto3 = new Producto("Laptop", 300, true);

// PROTOTYPE => funciones que solo se utiliza en un objeto en especifico. 
Producto.prototype.FormatearProducto = function(){
    return `El producto: ${this.nombre} Y su precio: ${this.precio}. Esta disponible: ${this.disponible}`;
}

console.log(producto2);
console.log(producto3);

console.log(producto2.FormatearProducto());
console.log(producto3.FormatearProducto());


// NUEVO VALOR
function Cliente(nombre, edad, apellido){
    this.nombre = nombre;
    this.edad = edad; 
    this.apellido = apellido;
}

Cliente.prototype.FormateandoCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}. Su edad es: ${this.edad}`;
}

let cliente = new Cliente("Dennys", 20, "Ponce");
let cliente2 = new Cliente("Juan", 18, "De la Torre");

console.log(cliente.FormateandoCliente());
console.log(cliente2.FormateandoCliente());

console.log(cliente);



// function FormatearProducto(producto){
//     return `El producto: ${producto.nombre} Y su precio: ${producto.precio}. Esta disponible: ${producto.disponible}`;
// }


// console.log(FormatearProducto(producto2));
// console.log(FormatearProducto(producto3));


