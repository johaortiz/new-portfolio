import dogsPILanding from '../../assets/dogsPILanding.png';
import tpUHome from '../../assets/tpUHome.png';
import finalProjectH from '../../assets/finalProjectH.png';
import Swal from 'sweetalert2';

function Experiencie() {
    return (
        <div className='gridOfCards aa my-10'>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure className="px-10 pt-10">
                    <img src={dogsPILanding} alt="Image-Dogs-PI" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Individual Project of "Henry"</h2>
                    <p>Build an App using React and NodeJs</p>
                    <div className="card-actions">
                        <label htmlFor="my-modal-0" className="btn">View More</label>
                        <input type="checkbox" id="my-modal-0" className="modal-toggle" />
                        <label htmlFor="my-modal-0" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">Project Objectives</h3>
                                <p className="text-start pt-4 pb-2">Build an App using React, Redux, Node and Sequelize</p>
                                <p className="text-start pb-2">To affirm and connect the concepts learned in the course</p>
                                <p className="text-start pb-2">Learn best practices</p>
                                <p className="text-start pb-2">Learn and practice GIT workflow</p>
                                <p className="text-start pb-4">Use and practice testing</p>
                                <h3 className="text-lg font-bold">Technologies</h3>
                                <p className="text-start py-4">React, Redux, Pure Css, NodeJs, Sequelize, Postgres, Morgan</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-0" className="btn" onClick={() => window.open('https://www.soyhenry.com/', '_blank')}>Henry</label>
                                    <label htmlFor="my-modal-0" className="btn" onClick={() => { Swal.fire({ title: 'Oops...', icon: 'info', text: `I didn't deploy the project :(` }) }}>Project</label>
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
                    <h2 className="card-title">University project</h2>
                    <p>Build an App for some basic matrix calculations</p>
                    <div className="card-actions">
                        <label htmlFor="my-modal-1" className="btn">View More</label>
                        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                        <label htmlFor="my-modal-1" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">Project Objectives</h3>
                                <p className="text-start pt-4 pb-2">Solve simple matrix problems</p>
                                <p className="text-start pb-4">Be able to solve it in code</p>
                                <h3 className="text-lg font-bold">Technologies</h3>
                                <p className="text-start py-4">React, JavaScript, DaisyUi, Tailwind</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-1" className="btn" onClick={() => window.open('https://www.ucp.edu.ar/', '_blank')}>University</label>
                                    <label htmlFor="my-modal-1" className="btn" onClick={() => window.open('https://matrices-six.vercel.app/', '_blank')}>Project</label>
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
                        <label htmlFor="my-modal-2" className="btn">View More</label>
                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <label htmlFor="my-modal-2" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">Project Objectives</h3>
                                <p className="text-start pt-4 pb-2">Build an E-commerce using React, Redux, Node and Sequelize</p>
                                <p className="text-start pb-2">Learn best practices</p>
                                <p className="text-start pb-2">Learn and practice GIT-FLOW</p>
                                <p className="text-start pb-4">Leading a team</p>
                                <h3 className="text-lg font-bold">Technologies</h3>
                                <p className="text-start py-4">React, Redux, DaisyUi, Tailwind, Mui, NodeJs, Sequelize, jwt, Postgres, Paypal && Mercado Pago {`(API)`}</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-2" className="btn" onClick={() => window.open('https://www.soyhenry.com/', '_blank')}>Henry</label>
                                    <label htmlFor="my-modal-2" className="btn" onClick={() => window.open('https://www.libroparaiso.com.ar/', '_blank')}>Project</label>
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