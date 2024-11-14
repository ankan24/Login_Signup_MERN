import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/dashboard")
            .then(response => {
                setUserDetails(response.data.userDetails);
            })
            .catch(error => {
                console.error("Error fetching dashboard data:", error);
            });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-blue-600">Dashboard</h1>
                {userDetails ? (
                    <div>
                        <h2 className="text-xl">Welcome, {userDetails.name}</h2>
                        <p>Email: {userDetails.email}</p>
                    </div>
                ) : (
                    <p>Loading dashboard...</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
