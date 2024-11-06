import { CiLogin } from "react-icons/ci";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start"></div>
                <div className="navbar-center">
                    {/* <a className="btn btn-ghost text-xl bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 hover:from-purple-500 hover:to-blue-500 bg-clip-text text-transparent">
                        Memory Game
                    </a> */}
                    <a className="text-3xl font-bold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-in-out">
                        Memory Game
                    </a>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn btn-circle bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 hover:from-purple-500 hover:to-blue-500 hover:scale-105">
                        <CiLogin className="text-gray-50" size={26} />
                    </button> */}
                    <button className="btn btn-circle bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <CiLogin size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
