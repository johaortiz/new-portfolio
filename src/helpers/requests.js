import axios from "axios";
import Swal from "sweetalert2";

export const sendEmail = async (email) => {
  try {
    axios.post(
      "https://back-nodemailer-to-port-production.up.railway.app/send",
      email
    );
    Swal.fire({
      icon: "success",
      title: "Email Sent",
      text: "Your email has been sent successfully",
      timer: 2500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      timer: 2500,
    });
  }
};
