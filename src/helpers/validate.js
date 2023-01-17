const validate = (values) => {
  let errors = {};
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    return (errors = "Email is Required please enter your email");
  } else if (!re.test(String(values.email).toLowerCase())) {
    return (errors.email = "Invalid email");
  }
  if (!values.name) {
    return (errors = "Name is Required please enter your name");
  }
  if (!values.subject) {
    return (errors = "Subject is Required please enter a subject");
  }
  if (!values.message) {
    return (errors = "Message is Required please enter a message");
  } else if (values.message.length < 9) {
    return (errors = "Message must be at least 9 characters");
  }
  return errors;
};

export default validate;
