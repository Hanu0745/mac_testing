
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

const dburl = "mongodb://localhost:27017/";


mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
});

const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', user);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
});

app.get('/', (req, res) => {
    res.send('<h6>hello</h6><h1>server is running</h1><h2>Welcome to the API</h2>');
});

app.listen(7000, () => {
    console.log('server running at port 7000');
});
