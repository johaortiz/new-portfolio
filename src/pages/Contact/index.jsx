import useSendData from "../../hooks/useSendData";

const initialState = {
  email: null,
  name: null,
  subject: null,
  message: null,
}

function Contact() {

  const { values, handleChange, handleSubmit } = useSendData(initialState);

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Me Now!</h1>
            <p className="py-6">I'll reply as soon as I read it!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input onChange={handleChange} values={values.email} name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input onChange={handleChange} values={values.name} name='name' type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input onChange={handleChange} values={values.subject} name='subject' type="text" placeholder="subject" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea onChange={handleChange} values={values.message} name='message' type="text" placeholder="message📩" className="textarea textarea-bordered" />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Contact;
