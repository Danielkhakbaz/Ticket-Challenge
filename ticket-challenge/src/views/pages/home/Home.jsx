import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="home__div">
                    <h4 className="home__text">Home</h4>
                    <button className="home__button" type="button">
                        <Link to="/stadiums">Go to Stadiums!</Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
