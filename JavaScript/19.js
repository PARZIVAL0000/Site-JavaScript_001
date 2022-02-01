// ESTRUCTURAS DE CONTROL

// const puntaje = 100;

// if(puntaje !== 1000){
//     console.log('No es igual');
// }else{
//     console.log('Si el puntaje es mil');
// }


// const efectivo = 1000;

// const carrito = 800; 

// if(efectivo >= carrito){
//     console.log('El Usuario Puede Pagar');
// }else{
//     console.log('Fondos Insuficientes.');
// }



// if(rol === 'Administrador'){
//     console.log("Acceso A Todo el Sistema");
// }
// else if(rol === 'Editor'){
//     console.log("Tienes acceso pero no puedes administrar el sistema");
// }
// else{
//     console.log("No tienes Acceso.");
// }


const rol = prompt('Ingresa Tu Designio:')


switch(rol){
    
    case 'Administrador':
        
        console.log("Tienes Acceso A Todo El Sistema.");

        if(rol === 'Administrador'){
            console.log('El sistema espera ordenes...');
        }
        else{
            console.log('Algo ha pasado con el Sistema... :(');
        }
        
        break;
    
    case 'Editor':
        
        console.log("Tienes Acceso, pero no puedes editar el sistema.");
        if(rol === 'Editor'){
            console.log('Por favor espera hasta que te designemos una tarea...');
        }else{
            console.log('Algo ha pasado con el Sistema ... :(');
        }
        break;

    case 'Visitante':
        
        console.log("No Posees Acceso Al Sistema...");
        if(rol === 'Visitante'){
            console.log('Gracias por Estar Aqui :)')
        }else{
            console.log('Lo sentimos algo ha pasado con nuestro sistema....');
        }
        break;

    default:
        console.log("Error... intentalo en otro momento.");
        if(rol !== 'Administrador' && rol !== 'Editor' && rol !== 'Visitante'){
            console.log('Creo que no tienes un designio... intentalo en otro momento 0|0');

        }
}
