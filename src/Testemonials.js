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


//style="width: 18rem;"

const TestemonialCard = ({ userName, rating, testemonie, avatar }) => {
    const renderStars = () => {
        const render = [];
        for(let i=1; i<=5; i++){
            render.push(
                <span key={i}
                    className={`fa fa-star ${rating >= i ? "checked" : "unchecked"}`}>
                </span>);
        };
        return render;
    };

    return (
        <div className="testeminial-card">
            <div className='user-rating'>
                <h4 className="user">{userName}</h4>
                <div className="rating">
                    {renderStars()}
                </div>
            </div>
            <div className='image-testemonie'>
                <img className="card-img" src={avatar} alt={userName} ></img>
                <h6 className="testemonie">{testemonie}</h6>
            </div>
        </div>
    );
};

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