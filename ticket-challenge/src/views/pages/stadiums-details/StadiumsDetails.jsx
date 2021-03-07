import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../../services/api/Config.json";
import "./StadiumsDetails.css";

const StadiumsDetails = ({ match }) => {
    const id = match.params.id;

    const [seats, setSeats] = useState([]);
    const [dataNumber, setDataNumber] = useState(0);

    useEffect(() => {
        // I made a get request to get the data with thhe specific id
        const fetchAPI = async () => {
            const { data } = await axios.get(`${apiURL}/map/${id}`);
            // Cause I'm not trying to get rid of previuos data, I used SPREAD OPERATOR to get the previous ones and add them to the new ones
            // Before fetching the data, seats array is empty , so we're not going to worry about setState with a empty array
            setSeats([...seats, ...data.data[dataNumber]]);
        };
        fetchAPI();
    }, [id, dataNumber, seats]);

    const handleBooking = (seat) => {
        // In here, I made a post method to try to call the server to change the UNRESERVED seat to a RESERVED seat
        return axios.post(`${apiURL}/map/${id}/ticket/${seat}`, { seat: 1 }).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    const handleNext = () => {
        // As we press this button, the dataNumber state is going to be updated
        // and with an updated dataNumber(state), There is going to make a new request to get newer data
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
