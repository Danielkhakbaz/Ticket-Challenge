import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../../services/api/Config.json";
import "./StadiumsDetails.css";

const StadiumsDetails = ({ match }) => {
    const id = match.params.id;
    const [seats, setSeats] = useState([
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
    ]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         console.log(seats);
    //         const { data } = await axios.get(`${apiURL}/map/${id}`).then((res) => {
    //             setSeats(data.data)
    //         });
    //     };
    //     fetchAPI();
    // });

    const handleBooking = async () => {
        axios.post(`${apiURL}/map/${id}/ticket`, {}).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <>
            <section className="stadiumDetails">
                <div className="stadiumDetails__div">
                    <h4 className="stadiumDetails__text">{id} Stadium</h4>
                    <div className="stadiumDetails__seats">
                        {seats.map((seat) => (
                            <button
                                className="stadiumDetails__seat"
                                disabled={seat === 1 && "disabled"}
                                onClick={() => handleBooking()}
                            >
                                {seat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StadiumsDetails;
