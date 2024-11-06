const Card = ({ num }) => {
    return (
        <div className="card bg-primary text-primary-content">
            <div className="card-body flex items-center justify-center">
                <h2 className="card-title">{num}</h2>
            </div>
        </div>
    );
};

export default Card;
