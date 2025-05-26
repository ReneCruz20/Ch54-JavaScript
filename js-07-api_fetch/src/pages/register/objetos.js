      const myArray = [1,2,3,4];
    const unionArray = myArray.join(" - "); // 1 - 2 -3 - 4 
    myArray.push(5,6,7,8);
    const arrayData = myArray[3]; // 4
    
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
    }
    
    
    const myObj = { //clave - valor
        key: "valor",
        name: "SerchNeo",
        firstName: "Trrs",
        email: "serchneo@matrix.com",
        password: "despertar&",
        birthdate: "2025-02-2025",
        isActive: true,
        hobbies: ["Despertar personas", "Verdades incomodas", "Comer pure"],
        favoritos:{
            bebidas:["agua", "pozol", "agua de tamarindo"],
            comidas:["pozole","tacos de suadero"]
        },
        saludar: function myFunction( persona){
            return `hola ${persona}`

        }

    
    };


    const ejecutarObjetos = ()=>{
// Leer datos del objeto
//Accedes al atributo clave: valor
const nombrePersona = myObj.key;
const favorito = myObj.favoritos.bebidas; // ["agua", "pozol", "agua de tamarindo"]
const segundaBebida = favorito[1]; //pozol
const terceraBebida = myObj.favoritos.bebidas[2]

//Acceder al atributo
/* 
        -Más legible y corta
        - Usada comunmente y preferida cuadno conoces el nombre de la propiedad. }


*/


const apellido = myObj.firstName;

/*
        - SOporta nombres con espacio, simbolo oo dinamicos

        Clave fija y válida                                   obj.propiedad
        Clave dinamica o con caracteres especiales            obj["clave"]
*/
 const firstName = myObj["firstName"];
 
//ejecutar funciones de mi objeto
const mensaje = myObj.saludar("saludar");
console.log(mensaje);

//-------------- Optional Chaining ------------------------
/* 
        Sirve para acceder a propiedades de objetos de forma segura, evitando
        errores si una propiedad intermedia no existe

*/
// const primeraComida = myObj.favoritos.alimentos; // undefined por que no existe el atributo alimentos
//  const primeraComida = myObj.favoritos.alimentos[0]; // Cannot read properties of undefined
const primeraComida = myObj?.favoritos?.alimentos; // undefined
/// ? funciona como un if else, ejemplo myobj?.favorites si ingresa a favoritos

// iterar un objeto
// for in itera sobre los atributos de un objeto

for (let clave in myObj){
    console.log(clave, myObj[clave])
}
}



export {ejecutarObjetos};