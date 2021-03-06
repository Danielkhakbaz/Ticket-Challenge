import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../../services/api/Config.json";
import "./StadiumsDetails.css";

const StadiumsDetails = ({ match }) => {
    const id = match.params.id;
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            console.log(seats);
            const { data } = await axios.get(`${apiURL}/map/${id}`).then((res) => {
                console.log(data);
                console.log(res);
            });
        };
        fetchAPI();
    });

    return (
        <>
            <section className="stadiumDetails">
                <h4 className="stadiumDetails__text">{id} Stadium</h4>

            </section>
        </>
    );
};

export default StadiumsDetails;
