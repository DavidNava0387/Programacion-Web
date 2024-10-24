//arreglos

let array = ["dato1", 1, Boolean];
console.log("Tamaño array: " + array.length);
array.push("Insert Nuevo valor");
console.log(array[3]);
console.log("Nuevo Tamaño array: " + array.length);
console.log(array[3]);

/*
5*1
5*2
5*3
5*4
5*5
5*6
fin del arregllo valor de la posicion = 30
*/ 

let tabl = [];
const x = 5;
var res;
for(let i=1; i<=10; i++) {
    tabl.push(x*i);
    res = x*i;
    if (i <= 6) {
        console.log(x + " * " + i + " = " + tabl[i-1]);
    }
    
}

console.log("Fin del arreglo, valor de la poscion = " + tabl[5]);
console.log("Nuevo Tamaño array: " + tabl.length);

/*
for(i=1; i<7; i++) {
    const x = 5;
    console.log(x + "*" + i + "=" + i*x)
    res = i*x;
}

console.log("Fin del arreglo, valor de la poscion = " + res);
*/