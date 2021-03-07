import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <section className="home">
                <h4 className="home__text">Home</h4>
                <Link to="/stadiums">
                    <button className="home__button" type="button">
                        Go to Stadiums!
                    </button>
                </Link>
            </section>
        </>
    );
};

export default Home;
