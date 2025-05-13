console.log("Sesión JS-01, tipos de datos y variables");

/*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos

- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/

// ================= Datos primitivos ==================
/*
 string: tipo de dato que rpresenta una secuencia de caracteres.
  Puede incluir textos, números, espacios, símbolos. Siempre se 
  define entre comillas.


*/
console.log("Kati sería unas pantuflas"); // se puede usar comillas dobles
console.log('Alberti sería unas botas de trabajo'); // se puede usar comillas simples
console.log(`Veronica sería unos mocasines`) // usando backticks (apóstrofe grave) para Template Literals

/*
- String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.

*/
// Mostrar en console "El resultado de 3 * 4 = 12 pesos"
let valor1 = 3;
let valor2 = 4;

console.log("El resultado de " + valor1 + " * " + valor2 + " = " + valor1 * valor2 + " pesos.");
console.log(`El resultado de ${valor1} * ${valor2} = ${valor1*valor2} pesos.`);

/* 
Crear una variable con el nombre de la persona que cumple años.
Crear una variable con el regalo que le darás.
Mostrar en consola en mensaje que incluya el nombre de la persona y el regalo
*/
const nombre = "Jenipher Mares";
const regalo = "Unos Chetos";

console.log(`Estas son las mañanitas que cantaba la CH54 para ti jsjsj, Feliz Cumpleaños 🤩" ${nombre}`);
console.log(`Este es tu regalo: "  ${regalo} " te los envio por DHL`);



/*
 Tipos de datos number.

 - números positivos: 100, 1, 0.258
 - números negativos: -1 , -50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3)  ); // 'number'
console.log( typeof "" ); // 'string' empty string
console.log( typeof " " ); // 'string'
console.log( 3*"pitufo trabajador" ); // NaN
console.log( typeof ( 3 * "pitufo trabajador") ); // 'number'
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'
console.log( typeof ( "3Viernes temático" ) ); // 'string'
console.log( 4 / 0 ); // +Infinity
console.log("-----------------------------------------------");

/* Comprueba si las siguientes variables del tipo number */
const num1 = 42;
if (typeof num1 === "number") {
  console.log("Esta variable es de tipo número");
}
/* Comprueba si las siguientes variables del tipo string */
const nameCh54 = "Rene";
if (typeof nameCh54 === "string") {
  console.log(`Esta variable es de tipo string`)
}

/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.

 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/
console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`); // 0.30000000000000004
console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.

 Las operaciones con un bigInt se debe hacer con otro bigInt

*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997

/*
 Tipo de dato undefined
  - Una variable que es declarada, pero el tipo de datos
   no es definido.
*/

let myName;
console.log( typeof myName ); // 'undefined'

/*
 Tipo de dato null
  - Una variable que intensionalmente se borra el tipo de dato

  */
 
 let myAge; 
 console.log(`Tipo de dato en myAge: ${typeof myAge }`); // undefined
 myAge = 20;
 console.log(`Tipo de dato en myAge: ${typeof myAge }`); // number
 
 myAge = null; // intensionalmente se borra el tipo de dato
  // NO es correcto usar typeof con un dato null
 console.log(`Tipo de dato en myAge: ${typeof myAge }`); // object
 console.log(`myAge es null?  ${ myAge === null } `);// true

 
 /*
 Tipo de dato boolean
 Tiene dos estados: true y false

 */
 const isActive = true;
 console.log( typeof isActive ); // boolean

  
 // --------------------------------------------------------------
 /*
   Conversion de datos (type casting)
  
   El type casting es el acto de convertir variables de un tipo de dato a otro.
   Esto puede ser implícito(automático) o explícito (forzado por el desarrollador).

 */

   // Conversión implícita
   const resultado = "5" + 2 ; // "52" Número convertido a string
   const multiplicacion =  "5" * 3; // 15 El string convertido a number
                     //     5   * 3 = 15
   const division =  "two" * 6; // NaN
                    // NaN * 6 = NaN


 /*
   Conversion explícita de datos (coerción de tipo)

 */
const edadMascota = 10;
// conversión explícita a String ============================================
const edadMascotaString = String( edadMascota );
console.log(`Mi mascota tiene ${ edadMascotaString } años`);
console.log(`Mi mascota tiene ${ edadMascota } años`);
console.log( String( true ) ); // "true"
console.log( String( null ) ); // 
console.log( String( undefined ) ); // "undefined"
console.log( String( [] ) ); // empty Array-> ""
console.log( String( [2,3,4,5,null,3] ) ); // "2,3,4,5,,3"
console.log( String( {} ) ); // [object Object]
console.log( String( {name:"Serch", active:true} ) ); // [object Object]
// Para lo objetos se recomienda usar el métod JSON.stringyfy( object )
// convierte un objeto en formato JSON
console.log( JSON.stringify( {name:"Serch", active:true} ) ); // {"name":"Serch","active":true}

// conversión implícita a number ============================================
const costo = "100";
const costoConIVA = costo * 1.16 ; // 116.00 conversión implícita de string a number

// conversión explícita a number ============================================
const precioCroquetas = "2000";
const precioJabon = "300.50";
const precioVitaminas = "600.30";
const costoTotal =  precioCroquetas + precioJabon + precioVitaminas; // 2000300.50600.30
console.log( costoTotal );

/*
 Number() Vs parseInt() y parseFloat()
  - Number convierte enteros y decimales
  - Number devuelve NaN si la cadena contiene algún caracter no numérico
  - Con parseInt y parseFloat, si la entrada comienza con un valor no numérico devuelve NaN
  - parseInt convierte solo la parte entera
  - parseFloat convierte la parte entera y decimales
  - parseInt y parseFloat realiza la conversión hasta encontrar un caracter no numérico
*/

console.log( Number("68.58") ); // 68.58
console.log( parseInt("68.58") ); // 68
console.log( parseFloat("68.58") ); // 68.58

console.log( Number("68.58 dolares") ); // NaN
console.log( parseInt("68.58 dolares") ); // 68
console.log( parseFloat("68.58 dolares") ); // 65.58

console.log( Number("$68.58 dolares") ); // NaN
console.log( parseInt("$68.58 dolares") ); // NaN
console.log( parseFloat("$68.58 dolares") ); // NaN

console.log( Number("68-58") ); // NaN
console.log( parseInt("68-58") ); // 68
console.log( parseFloat("68-58") ); // 68

console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0

console.log( Number( [] ) ); // 0
console.log( Number( [30] ) ); // 30
console.log( Number( [30,40] ) ); // NaN

// Conversión a tipo boolean
// En la conversión a boolean los siguientes valores son false:
// ""(empty string), 0, NaN, null, undefined
console.log( Boolean(1) ); // true
console.log( Boolean(10000) ); // true
console.log( Boolean(-1000) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(NaN) ); // false

console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
console.log( Boolean("1") ); // true
console.log( Boolean("0") ); // true

// Resumen:

// Number()
// [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1

// String()
// [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"

// Para convertir un objeto a string, la forma correcta es usar
// el método JSON.stringyfy( objeto );

// Resumen : https://www.w3schools.com/js/js_type_conversion.asp
