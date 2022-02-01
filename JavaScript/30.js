// NOTIFICACION API


const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
    //registrar notificacion.
    Notification.requestPermission()
        .then(function(resultado){
            console.log(`El Resultado Es: ${resultado}`);
        })
        
});

if(Notification.permission === "granted"){
    new Notification('Esta Es Una Notificación', {
        icon: 'img/cafe.jpg',
        body: 'Aprender a realizar un delicioso café con recetas caseras.'
    })
}
