const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const url =
            "mongodb+srv://demouser:demo123@cluster0.ap4zayq.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
