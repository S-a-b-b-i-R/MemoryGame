import { CiLogin } from "react-icons/ci";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start"></div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 hover:from-purple-500 hover:to-blue-500 bg-clip-text text-transparent">
                        Memory Game
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-circle bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 hover:from-purple-500 hover:to-blue-500 hover:scale-105">
                        <CiLogin className="text-gray-50" size={26} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
