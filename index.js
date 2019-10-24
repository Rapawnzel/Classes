import {Desayuno} from "./desayunos.js";
import {Almuerzo} from "./almuerzos.js";
import {Cena} from "./cenas.js";

let huevos_revueltos = new Desayuno (1000, "200g", "salado");
let paella = new Almuerzo (1500, "800g", "variado");
let merluza = new Cena (800, "200g", "salado");

huevos_revueltos.comer();
paella.comer();
merluza.comer();

/*

11.En index.js importaremos las clases “Desayuno”, “Almuerzo” y “Cena”. Ahora 
crearemos 3 objetos:

a.Un objeto llamado “huevos revueltos”, usando como plantilla la clase “Desayuno”.
Con un valor nutricional de 1.000, una cantidad de 200g y unsabor salado.

b.Un objeto llamado “paella”, usando como plantilla la clase “Almuerzo”. Con un valor nutricional
de 1.500, una cantidad de 800g y un sabor... “variado”.

c.Un objeto llamado “merluza”, usando como plantilla la clase “Cena”. Con un valor nutricional 
de 800, una cantidad de 200g y un sabor salado.

12.Ahora invocaremos las funciones “comer()” de cada uno de nuestros 3 objetos.


13.Crearemos un archivo index.html y pondremos links a los 5 archivos javascript con la
propiedad module. Al abrirlo con un servidor local, deberíais ver en la terminal los 3
logs con los mensajes “hmmmm yummy!”, “ugghhh, creo que me ha sentado mal...”
y “no me ha sentado mal, pero estaba sosa”.*/