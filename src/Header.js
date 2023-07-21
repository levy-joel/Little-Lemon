import './Header.css'

const Header = () => {
    return (
        <header id='reservations' className='header-container'>
            <hgroup className='title-section'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                    The restaurant features a locally-sourced menu with daily specials.
                </p>
                <button className='reserve-button'><h5>Reserve a Table</h5></button>
            </hgroup>
            <section className='image-container'>
                <img src='restauranfood.jpg' alt='Our favorite dish'></img>
            </section>
        </header>
    );
};

export default Header;