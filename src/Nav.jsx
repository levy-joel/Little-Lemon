import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
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
            </nav>
        </div>
    );
};

export default Nav;