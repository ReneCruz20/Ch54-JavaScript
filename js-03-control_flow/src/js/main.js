/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* 
 Crear un arrow function que reciba el valor de edad. 
 Si la edad es mayor o igual a 18, la funcion debe 
 retornar el mensaje "Eres mayor de edad".

 En caso contario, retornar el mensaje "Eres menor de edad"

 -Realizar la version de if-else sin usar el bloque de código {}

*/
/* 
const edad = (años) => 
    años >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(edad(16));   */

const verificarEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
}
const resultado = verificarEdad(19);
console.log(resultado);

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/
const verificarEdad1 = edad => {
    if (edad >= 18 && edad <= 30) return "Tu luchador es Místico";
    else if (edad >= 31) return "Tu luchador es el Perro Aguayo";
    else if (edad <= 18) return "Tu luchador es el Penta";
}

const resultado1 = verificarEdad1(24);
console.log(resultado1);

// Bloque de código
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar);
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar =120;
        console.log(myVarLet, myVarConst, myVarVar);
    }
    console.log(myVarLet, myVarConst, myVarVar);
}


// Ejercicios mentales
let active = false;
if (active === true);
{
    console.log("Esta activo");
}
console.log("Fin del programa");
//-----------------Ejercicio2---------------

active = false;
if (active )
    //Este no se ejecuta, solo se ejecuta una instruccion
    console.log(`Esta activo`); 
console.log(`Tiene autorizacion`);
console.log(`Fin del programa`)

//-----------------Ejercicio3---------------

active = false;
if (active ); console.log(`Esta activo`); 
/* else console.log(`No está activo`);
console.log(`Fin del programa`); */


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/


const nombreMascota = (nombre) => {
    let resultado;
    switch (nombre) {
        case "lua":
            resultado = "Es de Abril";
        break;
        case "Milo":
            resultado = "Es de Carlos";
            break;
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        case "Charly":
        case "Jack":
        case "Popeye":
        case "Dante":
            resultado = "Es de Rene";
            break;
        default:
            resultado = `No se sabe de quien es`;
        
    }
    return resultado;
}
console.log(nombreMascota("Lua")); //Es de Abril
console.log(nombreMascota("Milo")); //Es de Carlos
console.log(nombreMascota("Charly")); //Es de Rene



/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

const funcionVentilador = (velocidad) => {
    let resultado4;
    switch (velocidad) {
        case 0:
        resultado4 = `Apagado`
        break;
        case 1:
        resultado4 = `Baja`
        break;
        case 2:
        resultado4 = `Media`
        break;
        case 3:
        resultado4 = `Alta`
        break;

        default:
            resultado4 = `Velocidad desconocida`;
        
    }
    return resultado4;
}
console.log(funcionVentilador(1));
console.log(funcionVentilador(3));
console.log(funcionVentilador(5));

//Mismo ejercicio pero con funcion if
console.log(`-------------------------`)
const funcionVentilador2 = (velocidad) =>{
    if (velocidad === 0) return "Apagado";
    else if (velocidad === 1) return "Baja";
    else if (velocidad === 2) return "Media";
    else if (velocidad === 3) return "Alta";
}
const resultado5 = funcionVentilador2(0);
console.log(resultado5);

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/




/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


