import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4 bg-gray-300">
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
