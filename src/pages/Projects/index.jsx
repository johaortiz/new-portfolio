import Card from './Card';
import cardsIfo from './cardsInfo';
function Projects({ language }) {

    return (
        <div className='gridOfCards aa my-10 mb-20'>
            {
                cardsIfo.map((card) => {
                    return <Card key={card.modal} card={card} language={language} />
                })
            }
        </div>
    );
};
export default Projects;