import { useState } from "react";
import { sendEmail } from "../helpers/requests";
import validate from "../helpers/validate";
import Swal from "sweetalert2";

function useSendData(initialState = {}) {

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    Object.entries(errors).length < 1
      ? (sendEmail(values) && handleReset())
      : alert(errors);
  };

  const handleReset = () => {
    document.querySelectorAll("input").forEach(input => (input.value = ""));
    document.querySelectorAll("textarea").forEach(input => (input.value = ""));
  };

  const alert = (error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    })
  }

  return { values, handleChange, handleSubmit };

}

export default useSendData;
