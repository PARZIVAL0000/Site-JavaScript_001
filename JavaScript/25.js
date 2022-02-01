//This  -> Muestra el Valor Actual. 
// let nombre = "Anthony";
// window.nombre2 = 'XXXXXX';

//No es recomendable poner un Array Functions en un objeto.
const reservacion = {
    nombre : "Dennys",
    apellido : "Ponce",
    total : 5000,
    pagado : true,
    informacion : function(){
        console.log(`El cliente ${this.nombre} tiene una deuda de ${this.total}`);
    }
}
const reservacion2 = {
    nombre : "Alexander",
    apellido : "Sanchez",
    total : 5000,
    pagado : false,
    informacion : function(){
        console.log(`El cliente ${this.nombre} tiene una deuda de ${this.total}`);
    }
}


reservacion.informacion();

reservacion2.informacion();