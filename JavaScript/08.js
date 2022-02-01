
let valores = {nombre : "Dennys Ponce", 
    edad : 16, 
    colorFavorito : "Azul Intenso"
}


// La forma de crear nuestros propios valores.

// const nuevaEdad = valores.edad;
// const nuevoColorFavorito = valores.colorFavorito;
// console.log(nuevaEdad);
// console.log(nuevoColorFavorito);

console.log("=========================================");
// Pero podemos aplicar algo que se llama ---destructuring object--
const {edad, colorFavorito} = valores;
console.log(`Mi edad es : ${edad} y mi color favorito es : ${colorFavorito}`);
