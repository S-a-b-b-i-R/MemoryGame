import { useState } from "react";
const Grid = () => {
    const [cardNumber, setCardNumber] = useState(9);
    const numbers = [3, 9, 16];
    return (
        <div className="">
            <div className="flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Click
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow left-1/2 transform -translate-x-1/2"
                    >
                        {numbers.map((item) => (
                            <li key={item} onClick={(e) => setCardNumber(item)}>
                                <a>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {/* {cards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => onCardClick(card)}
                        className="bg-blue-200 rounded-lg shadow-lg p-6 cursor-pointer flex items-center justify-center"
                    >
        
                        {card.isFlipped ? (
                            <img
                                src={card.image}
                                alt="Card"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="bg-gray-300 w-full h-full"></div>
                        )}
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Grid;
