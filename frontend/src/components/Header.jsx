import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bg-red-700 p-7 flex justify-between items-center">
            <h1 className="text-5xl text-white"><Link to="/">SHOP SPHERE</Link></h1>
            <div className="flex gap-10 text-white">
                <Link to="/login" className="border-gray-900 rounded m-0 p-5 bg-red-800 active:scale-90">Login</Link>
                <Link to="/signup" className="border-gray-900 rounded m-0 p-5 bg-red-800 active:scale-90">Signup</Link>
            </div>
        </div>
    );
}

export default Header;
