
//Metodos de Propiedad
const ReproductorMusical = {
    reproducir: function(id){
        console.log(`Reproduciendo Canción Con El ID: ${id}...`);
    },
    pausar: function(){
        console.log("Pausar...");
    },
    crearPlayList: function(nombre){
        console.log(`Creando Tu PlayList ${nombre}`);
    },
    ReproduciendoPlayList : function(reproduciendo){
        console.log(`La PlayList ${reproduciendo} se esta reproduciendo...`);
    }
}
// Tambien podemos crear los metodos por fuera.
ReproductorMusical.BorrarCancion = function(id){
    console.log(`Borrando Cancion Con El ID: ${id}`);
}

console.log(ReproductorMusical);
ReproductorMusical.reproducir(3840);
ReproductorMusical.pausar();
ReproductorMusical.BorrarCancion(2480);
ReproductorMusical.crearPlayList("LoremIpsum");
ReproductorMusical.ReproduciendoPlayList("Heavy Metal");