const leerInputsFormulario = (formulario) => {
  const newUser = {
    name: formulario.elements["name"].value,
    lastname: formulario.elements["lastname"].value,
    email: formulario.elements["email"].value,
    password: formulario.elements["password"].value,
    birthdate: formulario.elements["birthdate"].value,
    checkbox: formulario.elements["terminos-condiciones"].checked,
  };

  return newUser;
};

export { leerInputsFormulario };
