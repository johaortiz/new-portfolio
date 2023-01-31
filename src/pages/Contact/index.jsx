import useSendData from "../../hooks/useSendData";

const initialState = {
  email: null,
  name: null,
  subject: null,
  message: null,
}

function Contact({ language }) {

  const { values, handleChange, handleSubmit } = useSendData(initialState, language);

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{language === 'en' ? 'Contact Me Now!' : 'Contáctame Ahora'}</h1>
            <p className="py-6">{language === 'en' ? "I'll reply as soon as I read it!" : '¡Responderé en cuanto lo lea!'}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{language === 'en' ? 'Your Email' : 'Su Email'}</span>
                </label>
                <input onChange={handleChange} values={values.email} name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{language === 'en' ? 'Your Name' : 'Su Nombre'}</span>
                </label>
                <input onChange={handleChange} values={values.name} name='name' type="text" placeholder={language === 'en' ? "name" : 'nombre'} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{language === 'en' ? 'Subject' : 'Asunto'}</span>
                </label>
                <input onChange={handleChange} values={values.subject} name='subject' type="text" placeholder={language === 'en' ? "subject" : 'asunto'} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{language === 'en' ? 'Message' : 'Mensaje'}</span>
                </label>
                <textarea onChange={handleChange} values={values.message} name='message' type="text" placeholder={language === 'en' ? "message📩" : 'mensaje📩'} className="textarea textarea-bordered" />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">{language === 'en' ? 'Send' : 'Enviar'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Contact;
