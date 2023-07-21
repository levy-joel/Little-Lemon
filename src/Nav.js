import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav-container'>
            <Link to='/' className='nav-item'>
                <img src="Logo.svg" alt="Little Lemon Logo" className='logo' />
            </Link>
            <Link to='/' className='nav-item'>Homepage</Link>
            <Link to='/Menu' className='nav-item'>Menu</Link>
            <Link to='/Reservation' className='nav-item'>Reserve a Table</Link>
            <Link to='/OrderOnline' className='nav-item'>Order Online</Link>
            <Link to='/About' className='nav-item'>About</Link>
        </nav>
    );
};

export default Nav;