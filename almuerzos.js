import {Comida} from "./comidas.js";

class Almuerzo extends Comida{
    constructor(valor_alimenticio, cantidad, sabor){
        super(valor_alimenticio, cantidad, sabor)
    }
    comer(){
        console.log("ugghhh, creo que me ha sentado mal...");
    }
}

export {Almuerzo}

/* 

6.Ahora importaremos la clase “Comida” dentro de “almuerzos.js”
 
7.En “almuerzos.js” crearemos la clase “Almuerzo”, que extenderá “Comida” pero
tendrá una función llamada “comer()”, que imprimirá un log diciendo “ugghhh, creo que me 
ha sentado mal...”

8.Exportaremos la clase “Almuerzo”.

*/