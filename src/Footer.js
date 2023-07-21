import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <img className='logo-buttom' src="Logo-buttom.svg" alt="Little Lemon Logo"></img>
            <div className='site-map'>
                <b className='site-map-item'>Site Map</b>
                <Link to='/' className='site-map-item'>Homepage</Link>
                <Link to='/Menu' className='site-map-item'>Menu</Link>
                <Link to='/Reservation' className='site-map-item'>Reserve a Table</Link>
                <Link to='/OrderOnline' className='site-map-item'>Order Online</Link>
                <Link to='/About' className='site-map-item'>About</Link>
            </div>
            <div className='contact'>
                <b className='contact-item'>Contact us</b>
                <span className='contact-item'>Address: 20 Lemons street, NY</span>
                <span className='contact-item'>Phone Number: 0123-45678910</span>
                <span className='contact-item'>Email: <a href="mailto:chicago@littlelemon.com">chicago@littlelemon.com</a></span>
                <div className='social'>
                    <span><a className='social-item' href="https://www.facebook.com/">
                        <img src='icons8-facebook.svg' width="30px" alt='Find us on Facebook'></img></a>
                    </span>
                    <p><a className='social-item' href="https://www.instagram.com/">
                        <img src='icons8-instagram.svg' width="30px" alt='Find us on Instagram'></img></a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;