const producto = {nombre : "Dennys Ponce", 
    edad : 16, 
    colorFavorito : "Azul Intenso"
}


const NuevoProducto = {
    nombre : "Synnde ecnoP",
    edad : 32,
    colorFavorito: "Azul Intenso",
}
NuevoProducto.colorFavorito = "Verde Intenso";

const CombinarValores = {...producto, ...NuevoProducto};

console.log(CombinarValores);