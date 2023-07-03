const Footer = () => {
    return (
        <footer>
            <img src="Logo-buttom.svg" alt="Little Lemon Logo" width="120rem"></img>
            <menu>
                <ul id="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </menu>
            <aside>
                <b>Contact</b>
                <p>
                    Address: 20 Lemons street, NY<br/>
                    Phone Number: 0123-45678910<br/>
                    Email: <a href="mailto:little_lemon@restaurant.com">little_lemon@restaurant.com</a>
                </p>
            </aside>
            <aside>
                <b>Social Media</b><br/>
                <a href="https://www.facebook.com/">Facebook link</a><br/>
                <a href="https://www.instagram.com/">Instagram link</a>
            </aside>



        </footer>
    );
};

export default Footer;