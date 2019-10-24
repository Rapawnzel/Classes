class Comida {
    constructor(valor_alimenticio, cantidad, sabor){
        this.howMany = valor_alimenticio;
        this.howMuch = cantidad;
        this.taste = sabor;
    }
}


export {Comida}

/* 

2.En comidas.js crearemos una clase llamada “Comida” cuyo constructor recibirá los
parámetros: valor alimenticio, cantidad y sabor (dulce, salado, agridulce, etc...)

3.Exportamos la clase Comida. La importamos dentro del archivo “desayunos.js”.

*/