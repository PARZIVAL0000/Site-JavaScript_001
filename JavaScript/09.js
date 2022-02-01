"use strict"; //Correo JavaScript en modo estricto.
const producto = {nombre : "Dennys Ponce", 
    edad : 16, 
    colorFavorito : "Azul Intenso"
}


console.log(producto);
/**
     Object.seal(producto);
     console.log(Object.isSealed(producto));

     -->seal<-- solo te permite cambiar el valor de las propiedades.
 */


/**
    Object.freeze(producto);
    console.log(Object.isFrozen(producto));

    -->freeze<-- no puedes eliminar, ni agregar, ni cambiar el valor de las propiedades.
 */
