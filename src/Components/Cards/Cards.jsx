import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ cardNumber }) => {
    let number = [];
    for (let i = 1; i <= cardNumber; i++) {
        number.push(i);
    }
    for (let i = number.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [number[i], number[j]] = [number[j], number[i]]; // Swap elements
    }
    return (
        <div
            className={`grid gap-4 p-4 ${
                cardNumber === 9
                    ? "grid-cols-3"
                    : cardNumber === 16
                    ? "grid-cols-4"
                    : "grid-cols-5"
            }`}
        >
            {number.map((item) => (
                <Card key={item} num={item} />
            ))}
        </div>
    );
};

Cards.propTypes = {
    cardNumber: PropTypes.number,
};

export default Cards;
