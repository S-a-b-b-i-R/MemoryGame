import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ num }) => {
    const [revealed, setRevealed] = useState(false);
    return (
        <div
            className="card bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => {
                setRevealed(!revealed);
                setTimeout(() => {
                    setRevealed(false);
                }, 2500);
            }}
        >
            <div className="card-body flex items-center justify-center p-6">
                <h2 className="card-title text-3xl font-semibold text-gray-700">
                    {revealed ? num : "?"}
                </h2>
            </div>
        </div>
    );
};
Card.propTypes = {
    num: PropTypes.number,
};

export default Card;
