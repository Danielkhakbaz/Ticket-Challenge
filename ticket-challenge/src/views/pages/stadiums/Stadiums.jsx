import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../../services/api/Config.json";
import "./Stadiums.css";

const Stadiums = () => {
    const [stadiums, setStadiums] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            await axios.get(apiURL).then((data) => {
                setStadiums(data.data.data.map_ids);
            });
        };
        fetchAPI();
    }, []);

    return (
        <>
            <section className="stadium">
                <div className="stadium__div">
                    <h4 className="stadium__text">Stadiums</h4>
                    {stadiums.map((stadium) => (
                        <div key={stadium}>
                            <Link to={`${stadium}`}>{stadium}</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Stadiums;
