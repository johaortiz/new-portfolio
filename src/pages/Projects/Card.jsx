function Card({ card, language }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure className="px-10 pt-10">
                <img src={card.image} alt="Image-Dogs-PI" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{language === 'en' ? card.title.en : card.title.es}</h2>
                <p>{language === 'en' ? card.subTitle.en : card.subTitle.es}</p>
                <div className="card-actions">
                    <label htmlFor={`my-modal-${card.modal}`} className="btn">{language === 'en' ? 'View More' : 'Ver Más'}</label>
                    <input type="checkbox" id={`my-modal-${card.modal}`} className="modal-toggle" />
                    <label htmlFor={`my-modal-${card.modal}`} className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">{language === 'en' ? 'Project Objectives' : 'Objetivos del Proyecto'}</h3>
                            {
                                language === 'en' ?
                                    card.paragraphs.en.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                                    :
                                    card.paragraphs.es.map((p, i) => <p key={i} className="text-start py-4">{p}</p>)
                            }
                            <h3 className="text-lg font-bold">{language === 'en' ? 'Technologies' : 'Tecnologías'}</h3>
                            <p className="text-start py-4">{card.technologies}</p>
                            <div className="modal-action">
                                {
                                    card.links.map((link, i) => {
                                        return (
                                            <label key={i} htmlFor={`my-modal-${card.modal}`} className="btn" onClick={() => window.open(link.url, '_blank')}>{language === 'en' ? link.text.en : link.text.es}</label>
                                        )
                                    })
                                }
                            </div>
                        </label>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Card