import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
<<<<<<< HEAD
        const response = await axios.post("http://localhost:3000/login", {
            mail: email,
            pswd: password,
        });
        if (response.data.success) {
            window.location.href = "https://shop-sphere-xc2b.onrender.com/";
            navigate('/dashboard');
        } else {
            alert("Invalid Credentials");
=======
       // const response = await axios.post("http://localhost:3000/login",{
 const response = await axios.post("https://login-signup-backend-zw2k.onrender.com/login",{
            mail : email,
            pswd : password
        })
        if(response.data.success){
            window.location.href = "https://shop-sphere-xc2b.onrender.com/";
            navigate('/dashboard')
        }else{
            alert("Invalid Credentials")
>>>>>>> 26f7d87704862be94992c3305771731b3ec76090
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-red-600">Log In</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="mail"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        Submit
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        Don’t have an account? <Link to="/signup" className="text-red-500 hover:underline">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Login;
=======
export default Login
>>>>>>> 26f7d87704862be94992c3305771731b3ec76090
