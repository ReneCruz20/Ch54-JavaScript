const validateName = (name) =>{
    const result = {
        isValid: true,
        errors:[]
    };
    
    
    if(name === "" || name.length < 3){
        result.isValid = false;
        result.errors.push("El nombre debe estar vacío");
    } else if(name.length < 3){
        result.isValid = false;
        result.errors.push("El nombre debe  tener al menos 3 caracteres");

    }

    return result;

}


export{validateName};

