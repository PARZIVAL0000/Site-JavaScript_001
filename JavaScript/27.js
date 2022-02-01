// CLASES

class Producto{
    constructor(name, precio){
        this.name = name;
        this.precio = precio;
    }

    FormateandoProducto(){
        return `El producto es ${this.name}: ${this.precio}`;
    }


    ObteniendoPrecio(){
        console.log(this.precio);
    }
    // get NuevoProducto(){
    //     return this.name;
    // }
}

const producto = new Producto("Tablet", 200);
console.log(producto);
producto.ObteniendoPrecio();

// HERENCIA -> se logra con ( extends ) palabra reservada.
class NuevoProducto extends Producto{
    constructor(name,precio,total){
        super(name,precio);
        this.total = total;
    }

    FormateandoProducto(){
        return `${super.FormateandoProducto()} Con un total de: ${this.total}`;
    }

    ObteniendoPrecio(){
        super.ObteniendoPrecio();
        console.log('El precio si tiene existencia.');
    }
}
let NewProducto = new NuevoProducto("Computadora", 1200, 100);
NewProducto.ObteniendoPrecio();
console.log(producto.FormateandoProducto());
console.log(NewProducto.FormateandoProducto());

