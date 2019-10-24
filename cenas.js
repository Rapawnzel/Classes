import {Comida} from "./comidas.js";

class Cena extends Comida{
    constructor(valor_alimenticio, cantidad, sabor){
        super(valor_alimenticio, cantidad, sabor)
    }
    comer(){
        console.log("no me ha sentado mal, pero estaba sosa");
    }
}

export {Cena}

/* 

9.En “cena.js” importaremos la clase “Comida”. Crearemos una nueva clase llamada “Cena”
que extenderá la clase “Comida”. Además, tendrá una función llamada “comer()”, 
que imprimirá un log diciendo “no me ha sentado mal, pero estaba sosa”.

10.Ahora exportaremos la clase Cena.

*/