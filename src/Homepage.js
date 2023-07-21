import About from "./About";
import Specials from "./Specials"
import Testemonials from "./Testemonials";

const Homepage = () => {
    return (
        <main className="homepage">
            <Specials />
            <Testemonials />
            <About />
        </main>
    );
};

export default Homepage;