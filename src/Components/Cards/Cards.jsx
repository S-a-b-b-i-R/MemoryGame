import PropTypes from "prop-types";
import Card from "./Card";
import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Cards = ({ cardNumber }) => {
    const [number, setNumber] = useState([]);
    const [timer, setTimer] = useState(0); // Timer in milliseconds
    const [isPlaying, setIsPlaying] = useState(false); // Track play/pause status

    useEffect(() => {
        let tempNumber = [];
        const halfCardNumber = Math.floor(cardNumber / 2);

        for (let i = 1; i <= halfCardNumber; i++) {
            tempNumber.push(i, i); // Push each number twice to form pairs
        }

        if (cardNumber % 2 !== 0) {
            tempNumber.push(halfCardNumber + 1); // Add one unique number
        }

        for (let i = tempNumber.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempNumber[i], tempNumber[j]] = [tempNumber[j], tempNumber[i]]; // Shuffle
        }

        setNumber(tempNumber);
    }, [cardNumber]);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 10); // Increment timer by 10ms
            }, 10);
        } else {
            clearInterval(interval); // Clear interval on pause
        }
        return () => clearInterval(interval); // Clean up on unmount
    }, [isPlaying]);

    const handlePlayClick = () => {
        setIsPlaying((prevState) => !prevState); // Toggle play/pause
    };

    // Format the timer to MM:SS:MS
    const formatTime = () => {
        const minutes = String(Math.floor((timer / 60000) % 60)).padStart(
            2,
            "0"
        );
        const seconds = String(Math.floor((timer / 1000) % 60)).padStart(
            2,
            "0"
        );
        const milliseconds = String(Math.floor((timer / 10) % 100)).padStart(
            2,
            "0"
        );
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div>
            <div className="flex justify-center mb-4 text-2xl font-bold">
                {isPlaying ? `Time: ${formatTime()}` : "Press Play to Start"}
            </div>
            <div
                className={`grid gap-4 p-4 ${
                    cardNumber === 9
                        ? "grid-cols-3"
                        : cardNumber === 16
                        ? "grid-cols-4"
                        : "grid-cols-5"
                }`}
            >
                {number.map((item, index) => (
                    <Card key={`${item}-${index}`} num={item} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePlayClick}
                    className="btn btn-circle btn-outline"
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
        </div>
    );
};

Cards.propTypes = {
    cardNumber: PropTypes.number,
};

export default Cards;
