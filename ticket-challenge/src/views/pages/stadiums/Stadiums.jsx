import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../../services/api/Config.json";
import "./Stadiums.css";

const Stadiums = ({ history }) => {
    const [stadiums, setStadiums] = useState([]);

    useEffect(() => {
        // In this useEffect Hook, I'm trying to make a request call to get the stadiums list
        // due to its dependency, It only get called once
        const fetchAPI = async () => {
            const { data } = await axios.get(`${apiURL}/map`);
            setStadiums(data.data.map_ids);
        };
        fetchAPI();
    }, []);

    const handleBack = () => {
        return history.push("/");
    };

    return (
        <>
            <section className="stadium">
                <h4 className="stadium__text">Stadiums</h4>
                <div className="stadium__items">
                    {stadiums.map((stadium) => (
                        <button className="stadium__button--link" key={stadium}>
                            <Link to={`/stadiums/${stadium}`}>{stadium}</Link>
                        </button>
                    ))}
                </div>
                <button className="stadium__button--back" onClick={handleBack}>
                    Go Back
                </button>
            </section>
        </>
    );
};

export default Stadiums;
