/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
Argumentos de options: pust put delete

 Sintaxis:
    fetch(resource, options)

 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
*/

const irPorElElote = (horaDelDia) => {

    /* const miPromesa = new Promise( fncCallBack ); */
    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
        console.log("Voy por el elote en la " + horaDelDia); //Esta tarea puede demorar mucho o poco
        if (horaDelDia === "día" || horaDelDia === "tarde") {
            fncCallBackResolve("Toma tu elote que esta dentro de una bolsa");
        } else {
            fncCallBackReject({ error: 404, descripcion: "Elote no fue encontrado" })
        }
    });

    return miPromesa;
}

/**
 * Realizar una funcion de tipo Promise que reciba lo siguiente
 * @param{number} el numero de vueltas de amarre de la bolsa
 * 
 * La promesa se resuelve si el num de vueltas es menor a 2
 * se resuelve con el texto "ñomi ñomi, me como mi elote"
 * Si num. de vueltas es mayor a 2, 
 * la promesa se rechaza con el texto "ups se me cayo"
 * 
 */


const eloteNumVueltas = (amarres) => {
    const promesa = new Promise((fncCallBackResolve2, fncCallBackReject2) => {
        if (amarres < 2) {
            fncCallBackResolve2("Ñom, ñom esta bien bueno pero le faltó chile")
        } else if (amarres > 2) {
            fncCallBackReject2("Se me chispoteo")
        }

        const hola = new Promise((resolve, reject) => {

        })

    });

    return promesa;
}
/* eloteNumVueltas(1).then((response) => console.log("Promesa1", response));
eloteNumVueltas(4).then((response) => console.log("Promesa1", response)).catch( ( error )=> console.log(`Promesa rechazada`, error))

 */

/* miFuncionPromesa().then( callback ).catch( callback ); */

/* irPorElElote("tarde").then( (response)=> console.log("1aPromesa", response) );

irPorElElote("noche")
    .then( (response)=> console.log("2aPromesa", response) )
    .catch( ( error )=> console.log(`Promesa rechazada`, error))
    .finally( ()=> console.log("Se ha terminado tu promesa")) //Finally siempre se ejecutara independientemente se ejecute, la promesa then o catch
 */

//Ya tenogo mi elote, pero falta abrir la bolsa
const tiempo = "noche";
irPorElElote(tiempo)
    .then((response) => {
        console.log("1aPromesa", tiempo, response);
        const vueltas = 2;
        eloteNumVueltas(vueltas)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    })
    .catch((error) => console.log(`Promesa rechazada`, error))
    .finally(() => console.log("Se ha terminado tu promesa"));