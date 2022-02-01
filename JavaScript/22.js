// FOOL LOOPS


let valores = [
    ["Dennys"],
    ["Juan"],
    ["Carlos"],
    ["Alberto"],
    ["Lucia"],
    ["Sofia"],
    ["Roberto"],
    ["Ganimedes"],
    ["Oxlac"],
    ["Dune"]
]

for(let i = 0; i < valores.length; i++){
    console.log(valores[i]);
    if(valores[i] === valores[0]){
        console.log(`Hola ${valores[0]}`);
    }
    else if(valores[i] === valores[1]){
        console.log(`Hola ${valores[2]}`);
    }else if(valores[i] === valores[2]){
        console.log(`Hola ${valores[2]}`);
    }else if(valores[i] === valores[3]){
        console.log(`Hola ${valores[3]}`);
    }else{
        console.log(`Hola como han estado ${valores[i]}`);
    }
}