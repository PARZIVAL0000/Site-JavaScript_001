const rol = prompt('Ingresa Tu Designio:')
const codigo = prompt('Ingresa tu Codigo de Verificación');

switch(codigo){
    case 1754090106:
        if(codigo === 1754090106){
            console.log(rol);
        }else{
            console.log(false);
        }
        break;

    case 1818:
        if(codigo === 1818){
            console.log(rol);
        }
        else{
            console.log(false);
        }
        break;

    case 0101:
        if(codigo === 0101){
            console.log(rol);
        }else{
            console.log(false);
        }
        break;

}
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
