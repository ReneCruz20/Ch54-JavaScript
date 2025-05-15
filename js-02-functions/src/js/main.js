console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("jen");

function saludar( nombre ){
  console.log("Que te gustaría de regalo de cumpleaños")
} 


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


const darRegalo = function( nombre, regalo){
  console.log(`Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen","Sopa Nisin con camarón")


/*
 Realizar una funcion declarada que sume dos numeros y retorne el resultado. 

 Realizar una funcion expresada que reste dos numeros y retorne el resultado. 

 */

//funcion declarada

function sumar(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const num1 = 20;
const num2 = 30;
const resultado1 = sumar(num1, num2);

console.log(`La suma de los números ${num1} y ${num2} es de: ${resultado1}`);

 //Funcion expresada
const funcionRestar = function restar(num1, num2) {
  const rest = num1 - num2;
  return rest;
};

const num3 = 24;
const num4 = 23;
const resultado = funcionRestar(num3, num4);

console.log(`La resta de los números ${num3} y ${num4} es de: ${resultado}`);
 






/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/


(function setUp(data){
  console.log("Configuración inicial de la aplicación");
  console.log(`Valor de data ${data}`);
})(18);


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/


/* 
Realizar una función declarada que calcule al área de un triangulo 
la funcion debe retornar el resultado
area = (base * altura) / 2 
*/
 const resultado3 = area(10, 10);

function area(b, h) {
  const area1 = (b * h) / 2;
  return area1;
}

console.log(`Área del triángulo es de: ${resultado3}`); 


/* Realizar una función expresada que calcule el área de un triángulo */

const triangulo = function areatriangulo (c,d){
  const area2 = (c * d) / 2;
  return area2;
}

const resultado4 = triangulo(10 ,10 )
console.log(`El area del triangulo es de: ${resultado4}`)

/* Realizar una funcion flecha que calcule el area de un triangulo */
const calcularArea = (base, altura) => (base * altura) / 2;

console.log(`Resultado usando arrow function: ${calcularArea(10,10)}`);

/* ¿Que sucede si uso console.log como retorno? */
const imprimirArea = (base, altura) => console.log(calcularArea(base,altura));

imprimirArea(10,10);


// Realizar una función flecha que calcule el área de un círculo
 /* Area = pi * radio^2/ */
 // Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"
const calcularArea2 = (pi,radio) => (pi*radio**2)
console.log(`Resultado del area de un circulo es de: ${calcularArea2(3.1416,10)}`); 
const imprimirAreaCirculo = (pi, radio) => document.getElementById("areaCirculo").innerText = calcularArea2(pi,radio);
imprimirAreaCirculo(3.1416, 10);

/*
------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona = (nombre="persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`)
saludarPersona(); //Hola undefined, ya nos camos a descansar
saludarPersona("mich"); //Hola undefined, ya nos camos a descansar

console.log( parseInt("5") ); //5 (base10: 0,1,2,3,4,5,6,7,8,9)
console.log( parseInt("1000") ); //1000 (base 10)
console.log( parseInt("1000", 10) ); //1000 (base 10)
console.log( parseInt("1000", 2) ); //8 (base 10)
console.log( parseInt("D2024D") ); //NaN (base 10)
console.log( parseInt("D2024D", 16) ); // 13763629


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                                    //18("Hola Ch54");
                                                    //"patito"("Hola Ch54");
                                                    //console.log("Hola Ch54");
                                                    //undefined("Hola Ch54");
                                                    //alert("Hola Ch54");

/*  imprimirMensaje( 18 ); //fncCallBack is not a function
 imprimirMensaje( "Patito" ); //fncCallBack is not a function */
 imprimirMensaje( console.log ) // "Hola Ch54"
 /* imprimirMensaje( console.log() ) ////fncCallBack is not a function
 imprimirMensaje( undefined ) ////fncCallBack is not a function */

 const enviarAParrafo = (mensaje) => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;
 };

 imprimirMensaje( enviarAParrafo );

// Usando la funcion imprimimrMensaje, enviar un callback para que imprima con alert

/* imprimirMensaje( alert ); */

/* 
 Realizar una funcion que sume dos numeros y que imprima el resultado.
 - Inicialmente se imprimira en la consola
 - Es posible que se te pida imprimar en el dom
 - Es posible que te pida imprimir en un alert

*/
/* const sumarDosNumeros = (a,b) => a + b;

const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}

sumarEImprimir(10,14);
sumarEImprimir(50,50, "parrafo"); */

const sumarDosNumeros = (a,b) => a + b;

const sumarEImprimir = ( a, b , imprimir) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    imprimir(mensaje);
}

sumarEImprimir(10,14, console.log);
