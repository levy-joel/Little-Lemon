const TestemonialCard = ({ userName, rating, testemonie, avatar }) => {
    const renderStars = () => {
        const render = [];
        for (let i = 1; i <= 5; i++) {
            render.push(
                <span key={i}
                    className={`fa fa-star ${rating >= i ? "checked" : "unchecked"}`}>
                </span>);
        };
        return render;
    };

    return (
        <div className="testeminial-card" aria-label="Testemonials of our clients">
            <div className='user-rating'>
                <h4 className="user">{userName}</h4>
                <div className="rating">
                    {renderStars()}
                </div>
            </div>
            <article className='image-testemonie'>
                <img className="card-img" src={avatar} alt={userName} ></img>
                <h6 className="testemonie">{testemonie}</h6>
            </article>
        </div>
    );
};

export default TestemonialCard;