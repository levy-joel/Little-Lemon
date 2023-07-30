import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate("/BookingPage");
    }

    return (
        <header className='header-container'>
            <div className='title-section'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                    The restaurant features a locally-sourced menu with daily specials.
                </p>
                <button
                    type='button'
                    className='button'
                    onClick={handleBookClick}>
                        <h5>Reserve a Table</h5>
                </button>
            </div>
            <div className='image-container'>
                <img src='restauranfood.jpg' alt='Our favorite dish'></img>
            </div>
        </header>
    );
};

export default Header;