import cvSvg from "../../assets/cv.svg";
import gitHubSvg from "../../assets/gitHub.svg";
import linkedInSvg from "../../assets/linkedIn.svg";
import cvEn from "../../assets/CV_Ortiz_Joaquin_En.pdf";
import cvEs from "../../assets/CV_Ortiz_Joaquin_Es.pdf";

function About({ language }) {
  const parrEn = [
    "I'm a young full-stack developer with almost 2 years of experience in the development of web and mobile applications. I am currently a university student of Systems Engineering, which has given me a solid theoretical and practical background in programming.",
    "My skills include proficiency in languages such as JavaScript, C#, and Java, as well as tools and technologies such as React, Node.js, and MongoDB. I also have experience in the development of mobile applications with React Native.",
    "In addition to my passion for programming, I also love teaching and mentoring others. I have had the opportunity to help several people achieve their goals in programming, and I'm proud to say that over 90% of the people I have worked with have succeeded in passing or achieving their goals.",
    "In my free time, I'm passionate about entrepreneurship and developing my own projects, especially in the field of programming. My most recent project was an e-commerce bookstore.",
    "I'm always looking for new challenges and opportunities to learn and grow as a developer, and I'm excited to see how my career evolves in the future.",
  ];
  const parrEs = [
    "Soy un joven desarrollador full-stack con casi 2 años de experiencia en el desarrollo de aplicaciones web y móviles. Actualmente soy estudiante universitario de Ingeniería de Sistemas, lo que me ha dado una sólida formación teórica y técnica en programación.",
    "Mis habilidades incluyen el dominio de lenguajes como JavaScript, C# y Java, así como herramientas y tecnologías como React, Node.js y MongoDB. También tengo experiencia en el desarrollo de aplicaciones móviles con React Native.",
    "Además de mi pasión por la programación, también me encanta enseñar y mentorizar a otros. He tenido la oportunidad de ayudar a varias personas a lograr sus metas en programación, y estoy orgulloso de decir que más del 90% de las personas con las que he trabajado han logrado aprobar o alcanzar sus metas.",
    "En mi tiempo libre, me apasiona el emprendimiento y el desarrollo de mis propios proyectos, especialmente en el campo de la programación. Mi proyecto más reciente fue una tienda de libros electrónicos.",
    "Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer como desarrollador, y estoy emocionado por ver cómo evoluciona mi carrera en el futuro.",
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex-col justify-start items-start aa w-full mx-5">
          <h3 className="text-lg font-bold mx-10 mt-20 moc">
            {language === "en" ? "Who's I am?" : "¿Quién soy yo?"}
          </h3>
          <small className="mx-10 moc">
            🤔
          </small>
          {language === "en"
            ? parrEn.map((p, i) => (
              <p key={i} className="mx-10 my-5 text-base text-justify">
                {p}
              </p>
            ))
            : parrEs.map((p, i) => (
              <p key={i} className="mx-10 my-5 text-base text-justify">
                {p}
              </p>
            ))}
          <h3 className="text-lg font-bold mx-10 moc mt-10 text-center">
            {language === "en" ? "Links" : "Enlaces"}
          </h3>
          <div className="my-4 gridOfLinks">
            <div className="avatar flex flex-col">
              <label className="my-1">Curriculum</label>
              <div className="w-12 h-12 mt-2 mx-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <a
                  href={language === "en" ? cvEn : cvEs}
                  download={
                    language === "en"
                      ? "CV_Ortiz_Joaquin_En"
                      : "CV_Ortiz_Joaquin_Es"
                  }
                >
                  <img src={cvSvg} />
                </a>
              </div>
            </div>
            <div className="avatar flex flex-col">
              <label className="my-1">GitHub</label>
              <div className="w-12 h-12 mt-2 mx-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <a target="_blank" href="https://github.com/johaortiz">
                  <img src={gitHubSvg} />
                </a>
              </div>
            </div>
            <div className="avatar flex flex-col">
              <label className="my-1">LinkedIn</label>
              <div className="w-12 h-12 mt-2 mx-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <a target="_blank" href="https://www.linkedin.com/in/johatris/">
                  <img src={linkedInSvg} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
