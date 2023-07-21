import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <hgroup className='about-text'>
                <h3>About Us</h3>
                <h4>Little Lemon Restaurant - Chicago</h4>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                    The restaurant features a locally-sourced menu with daily specials.
                </p>
            </hgroup>
            <div className='about-images'>
                <img className='about-image' src='Mario and Adrian A.jpg' alt='Mario and Adrian'></img>
                <img className='about-image' src='Mario and Adrian B.jpg' alt='Mario and Adrian'></img>
            </div>
        </div>
    );
};

export default About;