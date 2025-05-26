import { isUserValid } from "../../js/validations/isUserValid.js";
import { insertMainHeader as menu} from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { ejecutarObjetos } from "./objetos.js";
menu(document.getElementById("header"));

ejecutarObjetos()

const registerForm = document.getElementById("contactForm");


/* Sintaxis de addEventListener */
/* registerFrom.addEventListener("evento", ()=>{} ); */

registerForm.addEventListener( "submit" , ( e )=>{
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");
    // console.log( e );
    
    // Obtener los dtos del formulario.
    const newUser = leerInputsFormulario( registerForm );
    const validatedUser = isUserValid( newUser );
    // Validar los datos
    if (validatedUser.isValid){
        // Si los datos son válidos enviar el formulario

            // - Usando la api fetch al servidor, con el método POST enviar el formulario

    } else {
        alert(  validatedUser.errors.join("\n"));
    }
           // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
           // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario
} );