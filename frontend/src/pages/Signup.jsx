import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
    const [form, setForm] = useState({ name: "", mail: "", pswd: "" });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
        console.log(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/signup", form, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            alert("Signup successful!");
            window.location.href = "/login";
        } catch (err) {
            console.error(err);
            alert("Failed to signup. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-red-600">Sign Up</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            onChange={handleForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="mail"
                            placeholder="Enter your email"
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            onChange={handleForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="pswd" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="pswd"
                            placeholder="Enter your password"
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            onChange={handleForm}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        Submit
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account? <Link to="/login" className="text-red-500 hover:underline">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
