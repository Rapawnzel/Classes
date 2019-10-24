import {Comida} from "./comidas.js";

class Desayuno extends Comida{
    constructor(valor_alimenticio, cantidad, sabor){
        super(valor_alimenticio, cantidad, sabor)
    }
    comer(){
        console.log("hmmmm yummy!");
    }  
}


export {Desayuno}

/*

4.En “desayunos.js” crearemos una nueva clase llamada “Desayuno”, que extenderá la clase “Comida”. 
Desayuno tendrá una función llamada “comer()” que imprimirá un log diciendo “hmmmm yummy!”.

5.Exportaremos la clase “Desayuno”.

*/