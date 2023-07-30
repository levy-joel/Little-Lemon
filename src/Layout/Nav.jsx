import { useState } from 'react';
import '../Layout/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='nav-container'>
                <nav className='nav-bar'>
                    <Link to='/' className='logo'>
                        <img src="Logo.svg" alt="Little Lemon Logo" className='logo' />
                    </Link>
                    <Link to='/' className='nav-item'>Homepage</Link>
                    <Link to='/Menu' className='nav-item'>Menu</Link>
                    <Link to='/BookingPage' className='nav-item' id="book-a-table">Book a Table</Link>
                    <Link to='/OrderOnline' className='nav-item' id="order-online">Order Online</Link>
                    <Link to="/About" className='nav-item'>About</Link>
                    <img
                        src='icon _hamburger menu.svg'
                        className='hamburger_icon_mobile'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        alt="Hamburger menu icon"
                    />
                </nav>
            </div>

            <div
                className={`nav-mobile-container ${isMenuOpen ? 'menu-open' : ''}`}
                id="hamburger"
            >
                <nav className='nav-bar-mobile'>
                    <Link to='/' className='nav-item-mobile'>Homepage</Link>
                    <Link to='/Menu' className='nav-item-mobile'>Menu</Link>
                    <Link to='/BookingPage' className='nav-item-mobile' id="book-a-table">Book a Table</Link>
                    <Link to='/OrderOnline' className='nav-item-mobile' id="order-online">Order Online</Link>
                    <Link to="/About" className='nav-item-mobile'>About</Link>
                </nav>
            </div>
        </>
    );
};

export default Nav;