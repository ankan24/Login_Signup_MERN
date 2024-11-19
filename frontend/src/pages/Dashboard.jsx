import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        //axios.get("http://localhost:3000/dashboard")
       axios.get("https://login-signup-backend-zw2k.onrender.com/dashboard")
            .then(response => {
                setUserDetails(response.data.userDetails);
            })
            .catch(error => {
                console.error("Error fetching dashboard data:", error);
            });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="p-6 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-red-600">Dashboard</h1>
                {userDetails ? (
                    <div>
                        <h2 className="text-xl text-red-800">Welcome, {userDetails.name}</h2>
                        <p className="text-red-700">Email: {userDetails.email}</p>
                    </div>
                ) : (
                    <p className="text-red-500">Loading dashboard...</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
