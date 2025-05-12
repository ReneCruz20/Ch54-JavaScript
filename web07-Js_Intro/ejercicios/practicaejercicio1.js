function mostrarNombre(){
    let nombre = window.prompt("¿Cual es tu nombre?");
    if(nombre){
     cambioDeNombre(nombre);
    }
    else {
        alert("Ingresa un nombre valido")
    }
}

function cambioDeNombre(nombre){
    document.getElementById("title").textContent = "Hola " + nombre;
}