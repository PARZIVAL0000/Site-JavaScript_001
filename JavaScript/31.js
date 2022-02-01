// Async - Await.

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log("Descargando los Clientes... espere");
        setTimeout(() =>{
            resolve('Los clientes fueron descargados...');
        },5000)

    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("Descargando Pedidos... espere");
        setTimeout(() =>{
            resolve('Los Pedidos Fueron descargados...');
        },3000)

    });
}


//Para poder usar async/await debemos crear una funcion.
async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        //Crear un arreglo
        //Una forma mucho mas rapida de hacer.
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        resultado.forEach((n)=> console.log(n));
    } catch (error) {
        console.log(error);
    }
}

app();
