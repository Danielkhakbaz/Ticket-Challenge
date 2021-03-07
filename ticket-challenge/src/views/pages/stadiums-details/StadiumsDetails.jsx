import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../../services/api/Config.json";
import "./StadiumsDetails.css";

const StadiumsDetails = ({ match }) => {
    const id = match.params.id;

    const [seats, setSeats] = useState([]);
    const [dataNumber, setDataNumber] = useState(0);

    useEffect(() => {
        const fetchAPI = async () => {
            const { data } = await axios.get(`${apiURL}/map/${id}`);
            setSeats([...seats, ...data.data[dataNumber]]);
        };
        fetchAPI();
    }, [id, dataNumber, seats]);

    const handleBooking = (seat) => {
        axios.post(`${apiURL}/map/${id}/ticket/${seat}`, {}).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    const handleNext = () => {
        setDataNumber(dataNumber + 1);
    };

    return (
        <>
            <section className="stadiumDetails">
                <h4 className="stadiumDetails__text">{id} Stadium</h4>
                <div className="stadiumDetails__seats">
                    {seats.map((seat, index) => (
                        <button
                            className="stadiumDetails__seat"
                            disabled={seat === 1 && "disabled"}
                            onClick={() => handleBooking(seat)}
                            key={index}
                        >
                            {seat}
                        </button>
                    ))}
                </div>
                <button
                    className="stadiumDetails__button--next"
                    onClick={handleNext}
                >
                    Next DataNumber
                </button>
            </section>
        </>
    );
};

export default StadiumsDetails;
