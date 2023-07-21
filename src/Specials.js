import './Specials.css'

const specialsData = [
    {
        id: "1",
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "12.99$",
        image: "greek salad.jpg",
    },
    {
        id: "2",
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "5.99$",
        image: "Bruchetta.png",
    },
    {
        id: "3",
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "5.00$",
        image: "lemon dessert.jpg",
    },
];

const SpecialsCard = ({title, description, price, image}) => {
    return (
        <div className='special-card'>
            <div className='image_text'>
                <div className='image'>
                    <img src={image} alt={title}></img>
                </div>
                <div className='title_price'>
                    <h4>{title}</h4>
                    <h5>{price}</h5>
                </div>
                <p className='description'>{description}</p>
            </div>
            <div>
                <a className='order-delivery' href='#order'>
                    <p>Order a delivery</p>
                    <img src='delivery.svg' alt='Delivery'></img>
                </a>
            </div>
        </div>
    );
};

const Specials = () => {
    return (
        <div className='specials-container'>
            <div className='specials-title'>
                <h3>This weeks specials!</h3>
                <button className='order-online'><h5>Order Online</h5></button>
            </div>
            <div className='specials-cards'>
                {specialsData.map(dish => {
                    return(
                        <SpecialsCard key={dish.id}
                            title={dish.title}
                            description={dish.description}
                            price={dish.price}
                            image={dish.image}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Specials;