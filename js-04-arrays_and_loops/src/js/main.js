
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */
const cantantes = ["Valentín Elizalde", "Vicente Fernandéz","Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

// Imprimir en consola cada uno de los cantantes, usando for of en una arrow function
// Imprimir en consola cada uno de los cantantes, usandor for of
console.log("--------------------------------");
const imprimirCantantes = ( listaCantantes ) => {
    for (const cantante of listaCantantes) {
        console.log(cantante);
    }
}
imprimirCantantes(cantantes);
// La salida debe ser como "Juan Gabriel - José José- Rocío Dúrcal - Ana Gabriel "
console.log("--------------------------------");
const imprimirCantantes2= ( listaCantantes ) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes) {
        /* cantantesConcatenados = cantantesConcatenados + cantante + " - " ; */
        cantantesConcatenados += cantante + " - ";
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes2(cantantes));


/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 *  <li>Juan Gabriel</li>
 */

    const imprimirCantantes3 = (listaCantantes) => {
      let cantantesConcatenados = "";
      for (const cantante of listaCantantes) {
        /* cantantesConcatenados += '<li>' + cantante + '</li>'; */
        cantantesConcatenados += `<li>${cantante}</li>`;
      }
      return cantantesConcatenados;
    };

    document.getElementById("cantantes-lista").innerHTML = imprimirCantantes3(cantantes);







// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}





// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/

/* 
    Pregunta al usuario si quiere que se genere su número de la suerte.
    Si la respuesta es "si", genera de forma aleatoria un número.
    En caso contrario, despedirse.

*/

/* while ( confim("¿Quiere tu número de la suerte")){

    const numeroSuerte = Math.random();
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");

// for lopp vs while loop
for (let i = 0; i < 5; i++){
    console.log("For loop" , i);
}
 */

let numIteracion = 0;
while (numIteracion <5){
    console.log("while loop", numIteracion);
    numIteracion++;
}

/* 
 Uso de math.random();

 Generar 5 números aleatorios.
 Los numeros deben estar entre el 0.0 y 10.0 (sin incluir 10.0)

*/

                                            //Parámetro de default
const generarNumerosAleatorios = (cantidad , minNum = 0, maxNum = 10) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() ; //Un rango de 0 al 1.0 sin incluir 1.0
        const escalarNumero = numeroAleatorio * (maxNum - minNum + 1); // 0 ... 9
        const numerosEntero = Math.floor(escalarNumero + minNum);// 0 ... 9 Math.floor redondea el numero = 1.4 = 1
         console.log(`Número aleatorio entre ${minNum} y ${maxNum} :  ${numerosEntero}`);
    }
    
};

generarNumerosAleatorios(10, -10, 10);



/* 
    Melate Chocolate
    1. Al pulsar el botón Generar mis números de la suerte.
    2. Generar 6 números aleatorios entre el 1 y el 54
    3. Mostrar el resultado en el DOM


*/

/* 
* Generar un numero aleatorio entre un rango de numeros
* @param {number} minNum
* @param {number} maxNum
*/

const generarNumeroAleatorio = (minNum, maxNum)  =>{
    const numeroAleatorio = Math.random();
    const escalarNumero = numeroAleatorio * ((maxNum - minNum)+1);
     const numeroEntero = Math.floor(escalarNumero + minNum);
    return numeroEntero;   
};

const elNumeroExisteEnArreglo = (arreglo, numero) => {
   /*  for( const elemento of arreglo){
        if( elemento === numero ) return true
    }
    return false;
     */
    return arreglo.includes(numero);
}


const imprimirMeLateChocolate = ( numeros ) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = `${numeros.join('-')}`;
}


const generarNumerosDeLaSuerte = (size = 6, minNum = 1, maxNum = 54 ) => {
    const numeros = [];
    let iteracion = 0;
    // continue salta la siguiente iteracion y vuelve a repetir el ciclo

    while( numeros.length < size ){
        const numAleatorio = generarNumeroAleatorio(minNum, maxNum);
        if (elNumeroExisteEnArreglo(numeros, numAleatorio) === false){
            numeros.push(numAleatorio);
        }
         console.log(iteracion, numeros, numAleatorio);
        iteracion++;
    }
    imprimirMeLateChocolate( numeros);



}


