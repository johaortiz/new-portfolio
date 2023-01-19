import axios from "axios";
import Swal from "sweetalert2";

export const sendEmail = async (email, lang) => {
  try {
    axios.post(
      "https://back-nodemailer-to-port-production.up.railway.app/send",
      email
    );
    Swal.fire({
      icon: "success",
      title: lang === "en" ? "Email Sent" : "Correo Enviado",
      text: lang === "en" ? "Your email has been sent successfully" : "Tu correo ha sido enviado exitosamente",
      timer: 2500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: lang === 'en' ? "Something went wrong!" : "Algo salio mal!",
      timer: 2500,
    });
  }
};
