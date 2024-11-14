const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const url = "mongodb+srv://demouser:demo123@cluster0.ap4zayq.mongodb.net/LoginSignup?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
    .then(() => {
        console.log('Connected to Mongoose server');
    })
    .catch((err) => {
        console.error('Failed to connect to Mongoose server:', err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/signup', async (req, res) => {
    try {
        let user = new User({
            name: req.body.name,
            email: req.body.mail,
            password: req.body.pswd
        });

        const doc = await user.save();
        console.log(doc);
        res.json(doc); 
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Failed to signup user' });
    }
});


app.post('/login',(req,res)=>{
    const user = User.findOne({ email: req.body.mail, password: req.body.pswd });
    if(user){
        res.json({success: true, message : 'User successfully Login'});
    }else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
})


app.get('/dashboard', (req, res) => {
    res.json({
        message: "Welcome to the dashboard",
        userDetails: { name: "Demo User", email: "demo@example.com" }
    });
});


app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all handler to serve the React app for any route not handled by the API
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


app.listen(3000, () => console.log('Server listening on port 3000'));
