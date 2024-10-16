//Definicion de una funcion 
/*
function hello(){
    console.log('Hola clase');
    console.log(' 5IV7');
}

//Llamada a la funcion
hello();
hello();
hello();
hello();
hello();
*/
/*
//Retorno de una funcion
function hello(){
    return 'Hola clase';
}

const result = hello();

console.log(result);
*/
/*
//Funcion que retorna otra funcion
function hello(){
    return function (){
        return 'hola soy la funcion 2';
    }
}

console.log(hello()())

*/
/*
function add(x){

    console.log(x);

}

add(5)
*/
/*
//Multiparametros
function add(x,y){

    console.log(x+y);
}
add(5,undefined)
*/

//const { use } = require("chai");


//Control de error en multiparametros
/*
function add(x,y){

    if (y===undefined) {
        y=0;
    }

    console.log(x+y);
}
add(5,undefined)
*/

//parametro de tipo cadena
/*function add(name){


    console.log('Hola '+name);
}

add("Clase JS");

*/

//Objetos
const user = {
    nombre: 'David',
    apellidoP: 'Nava',
    apellidoM: 'Sosa',
    edad: 17,
    direccion :{
        calle: 'Mar Mediterraneo',
        no: 2018,
        colonia: 'Popotla',
        delegacion: 'Miguel Hidalgo'
    },
    amigos: ['Emiliano', 'Karen'],
    activo: true
}

//consola nombre, apellidoP, apellidoM
//alert activo
//console edad
//alert calle, no, colonia, delegacion
//consola amigos

function usuario(){
    console.log(user.nombre + " "+ user.apellidoP + " " + user.apellidoM);
    if (user.activo === true) {
      alert("Activo");  
    }
    console.log(user.edad);
    alert(user.direccion.calle + " " + user.direccion.no + " " + user.direccion.colonia + " " + user.direccion.delegacion);
    console.log(user.amigos[0] + " " + user.amigos[1]);
}

usuario();