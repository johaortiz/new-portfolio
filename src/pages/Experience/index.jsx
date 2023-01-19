import dogsPILanding from '../../assets/dogsPILanding.png';
import tpUHome from '../../assets/tpUHome.png';
import finalProjectH from '../../assets/finalProjectH.png';
import Swal from 'sweetalert2';

function Experiencie({ language }) {

    const parr0En = ['Build an App using React, Redux, Node and Sequelize', 'To affirm and connect the concepts learned in the course',
        'Learn best practices', 'Learn and practice GIT workflow', 'Use and practice testing'];
    const parr0Es = ['Construir una App utilizando React, Redux, Node y Sequelize', 'Para afianzar y conectar los conceptos aprendidos en el curso',
        'Aprender buenas prácticas', 'Aprender y practicar el flujo de trabajo de GIT', 'Utilizar y practicar testing'];
    const parr1En = ['Solve simple matrix problems', 'Be able to solve it in code'];
    const parr1Es = ['Resolver problemas simples de matrices', 'Ser capaz de resolverlo en código'];
    const parr2En = ['Build an E-commerce using React, Redux, Node and Sequelize', 'Learn best practices', 'Learn and practice GIT-FLOW', 'Leading a team'];
    const parr2Es = ['Construir un E-commerce utilizando React, Redux, Node y Sequelize', 'Aprender buenas prácticas', 'Aprender y practicar GIT-FLOW', 'Liderar un equipo'];

    return (
        <div className='gridOfCards aa my-10'>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure className="px-10 pt-10">
                    <img src={dogsPILanding} alt="Image-Dogs-PI" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{language === 'en' ? `Individual Project of "Henry"` : 'Proyecto Individual de "Henry"'}</h2>
                    <p>{language === 'en' ? 'Build an App using React and NodeJs' : 'Construir una app utilizando React y NodeJs'}</p>
                    <div className="card-actions">
                        <label htmlFor="my-modal-0" className="btn">{language === 'en' ? 'View More' : 'Ver Más'}</label>
                        <input type="checkbox" id="my-modal-0" className="modal-toggle" />
                        <label htmlFor="my-modal-0" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">{language === 'en' ? 'Project Objectives' : 'Objetivos del Proyecto'}</h3>
                                {
                                    language === 'en' ?
                                        parr0En.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                        :
                                        parr0Es.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                }
                                <h3 className="text-lg font-bold">{language === 'en' ? 'Technologies' : 'Tecnologías'}</h3>
                                <p className="text-start py-4">React, Redux, Css, NodeJs, Sequelize, Postgres, Morgan</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-0" className="btn" onClick={() => window.open('https://www.soyhenry.com/', '_blank')}>Henry</label>
                                    <label htmlFor="my-modal-0" className="btn" onClick={() => { Swal.fire({ title: 'Oops...', icon: 'info', text: `I didn't deploy the project :(` }) }}>{language === 'en' ? 'Project' : 'Proyecto'}</label>
                                </div>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure className="px-10 pt-10">
                    <img src={tpUHome} alt="Image-Dogs-PI" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{language === 'en' ? 'University project' : 'Proyecto Universitario'}</h2>
                    <p>{language === 'en' ? 'Build an App for some basic matrix calculations' : 'Construir una app para resolver algunos cálculos basicos de matrices'}</p>
                    <div className="card-actions">
                        <label htmlFor="my-modal-1" className="btn">{language === 'en' ? 'View More' : 'Ver Más'}</label>
                        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                        <label htmlFor="my-modal-1" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">{language === 'en' ? 'Project Objectives' : 'Objetivos del Proyecto'}</h3>
                                {
                                    language === 'en' ?
                                        parr1En.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                        :
                                        parr1Es.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                }
                                <h3 className="text-lg font-bold">{language === 'en' ? 'Technologies' : 'Tecnologías'}</h3>
                                <p className="text-start py-4">React, JavaScript, DaisyUi, Tailwind</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-1" className="btn" onClick={() => window.open('https://www.ucp.edu.ar/', '_blank')}>{language === 'en' ? 'University' : 'Universidad'}</label>
                                    <label htmlFor="my-modal-1" className="btn" onClick={() => window.open('https://matrices-six.vercel.app/', '_blank')}>{language === 'en' ? 'Project' : 'Proyecto'}</label>
                                </div>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure className="px-10 pt-10">
                    <img src={finalProjectH} alt="Image-Dogs-PI" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Final Project of "Henry"</h2>
                    <p>Build an e-commerce</p>
                    <div className="card-actions">
                        <label htmlFor="my-modal-2" className="btn">{language === 'en' ? 'View More' : 'Ver Más'}</label>
                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <label htmlFor="my-modal-2" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">{language === 'en' ? 'Project Objectives' : 'Objetivos del Proyecto'}</h3>
                                {
                                    language === 'en' ?
                                        parr2En.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                        :
                                        parr2Es.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                }
                                <h3 className="text-lg font-bold">{language === 'en' ? 'Technologies' : 'Tecnologías'}</h3>
                                <p className="text-start py-4">React, Redux, DaisyUi, Tailwind, Mui, NodeJs, Sequelize, jwt, Postgres, Paypal && Mercado Pago {`(API)`}</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-2" className="btn" onClick={() => window.open('https://www.soyhenry.com/', '_blank')}>Henry</label>
                                    <label htmlFor="my-modal-2" className="btn" onClick={() => window.open('https://www.libroparaiso.com.ar/', '_blank')}>{language === 'en' ? 'Project' : 'Proyecto'}</label>
                                </div>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experiencie