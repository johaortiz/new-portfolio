import Card from './Card';
import cardsIfo from './cardsInfo';
function Projects({ language }) {

    return (
        <div className='gridOfCards mx-10'>
            {
                cardsIfo.map((card) => {
                    return <Card key={card.modal} card={card} language={language} />
                })
            }
        </div>
    );
};
export default Projects;