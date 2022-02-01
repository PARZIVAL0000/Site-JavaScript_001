function Sumar(numero1 = 0, numero2 = 0){ //paremetros
    console.log(numero1 + numero2);
}

Sumar(10,20);//argumentos.

Sumar(30,20);

Sumar(5, 4);

Sumar(1);

const Nombre = function(numero1, numero2){
    console.log(numero1 + numero2);     
    if(numero1 == 20 && numero2 == 5){
        console.log(true);
    }else{
        console.log(false);
    }
}
Nombre(20, 5);