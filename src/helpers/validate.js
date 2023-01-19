const validate = (values, lang) => {
  let errorsEn = {};
  let errorsEs = {};
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errorsEn = "Email is Required please enter your email";
    errorsEs = "El correo es Requerido por favor ingrese su correo";
  } else if (!re.test(String(values.email).toLowerCase())) {
    errorsEn = "Invalid email";
    errorsEs = "Correo invalido";
  } else if (!values.name) {
    errorsEn = "Name is Required please enter your name";
    errorsEs = "El nombre es Requerido por favor ingrese su nombre";
  } else if (!values.subject) {
    errorsEn = "Subject is Required please enter a subject";
    errorsEs = "El asunto es Requerido por favor ingrese un asunto";
  } else if (!values.message) {
    errorsEn = "Message is Required please enter a message";
    errorsEs = "El mensaje es Requerido por favor ingrese un mensaje";
  } else if (values.message.length < 9) {
    errorsEn = "Message must be at least 9 characters";
    errorsEs = "El mensaje debe tener al menos 9 caracteres";
  }
  return lang === "en" ? errorsEn : errorsEs;
};

export default validate;
