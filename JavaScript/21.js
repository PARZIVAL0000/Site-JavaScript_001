// Siguiente con el Switch

const metodoPago = prompt('Metodo De Pago:');

switch(metodoPago.toUpperCase()){
    case 'TARJETA':
        console.log('Pagaste con Tarjeta');
        break;

    case 'BITCOIN':
        console.log('Pagaste con Bitcoin');
        break;

    case 'EFECTIVO':
        console.log('Pagaste con Efectivo');
        break;

    case 'CHEQUE':
        console.log('Revisando Fondos...');
        break;

    default:
        console.log('No pudiste pagar...');
        break;
}