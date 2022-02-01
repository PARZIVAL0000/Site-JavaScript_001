async function ObtenerEmpleador(){
    const archivo = 'Empleados.json'



    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(function(datos){
    //         // console.log(datos.empleados); 
            
    //         // Podriamos aplicar destructuring.
    //         const {empleados} = datos;
    //         console.log(empleados);

            // empleados.forEach(element => {
            //     console.log(element.nombre);
            //     console.log(element.id);
            //     console.log(element.Puesto);
              

            // });

            // let resultado;
            // resultado = empleados.filter(function(objetos){
            //     return objetos.Puesto == "Hackers";
            // })

            // resultado = empleados.some(function(objeto){
            //     return objeto.id === 4;
            // })

            // resultado = empleados.reduce(function(total, objeto){
            //     return total += objeto.id
            // }, 10)

            
            // console.log(resultado);
        // })
}

ObtenerEmpleador();