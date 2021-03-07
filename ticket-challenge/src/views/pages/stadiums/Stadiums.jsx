import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { apiURL } from "../../../services/api/Config.json";
import "./Stadiums.css";

const Stadiums = ({ history }) => {
    const [stadiums, setStadiums] = useState([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
    ]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         const { data } = await axios.get(`${apiURL}/map`);
    //         setStadiums(data.data.data.map_ids);
    //     };
    //     fetchAPI();
    // }, []);

    const handleBack = () => {
        return history.push("/");
    };

    return (
        <>
            <section className="stadium">
                <div className="stadium__div">
                    <h4 className="stadium__text">Stadiums</h4>
                    <div className="stadium__items">
                        {stadiums.map((stadium) => (
                            <button className="stadium__button" key={stadium}>
                                <Link to={`/stadiums/${stadium}`}>
                                    {stadium}
                                </Link>
                            </button>
                        ))}
                    </div>
                    <button
                        className="stadium__button--back"
                        onClick={handleBack}
                    >
                        Go Back
                    </button>
                </div>
            </section>
        </>
    );
};

export default Stadiums;
