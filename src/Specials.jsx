import SpecialsCard from './SpecialsCard';
import { useNavigate } from "react-router-dom";
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

const Specials = () => {
    const navigate = useNavigate();

    const handleOrderOnlineClick = () => {
        navigate("/OrderOnline");
    }

    return (
        <div className='specials-container'>
            <div className='specials-title'>
                <h3>This weeks specials!</h3>
                <button
                    type='button'
                    className='button'
                    onClick={handleOrderOnlineClick}>
                        <h5>Order Online</h5>
                </button>
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