import TestemonialCard from './TestemonialCard';
import './Testemonials.css'

const testemonialsData = [
    {
        id: "1",
        userName: "Tom",
        rating: "3",
        testemonie: "Great food, a bit noisy.",
        avatar: "icons8-person-16.png"
    },
    {
        id: "2",
        userName: "Stefanie",
        rating: "5",
        testemonie: "The Lemon dessert was the best I’ve ever eaten.",
        avatar: "icons8-person-16 (1).png"
    },
    {
        id: "3",
        userName: "Halena",
        rating: "4",
        testemonie: "The atmosphere is good, don’t miss the Bruchetta.",
        avatar: "icons8-person-16 (2).png"
    },
    {
        id: "4",
        userName: "Josh",
        rating: "1",
        testemonie: "Sorry, but not my cup of tee.",
        avatar: "icons8-person-16.png"
    },
    {
        id: "5",
        userName: "Judith",
        rating: "5",
        testemonie: "The selection is wonderfull",
        avatar: "icons8-person-16 (1).png"
    },
]

const Testemonials = () => {
    return (
        <div className='testemonials-container'>
            <h3>Testemonials</h3>
            <div className='testemonial-cards'>
                {testemonialsData.map(testement => {
                    return (
                        <TestemonialCard key={testement.id}
                            userName={testement.userName}
                            rating={testement.rating}
                            testemonie={testement.testemonie}
                            avatar={testement.avatar}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Testemonials;