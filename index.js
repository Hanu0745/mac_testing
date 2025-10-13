
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const dburl = "mongodb://localhost:27017/";

app.get('/', (req, res) => {
    res.send('<h6>hello</h6><h1>server is running</h1><h2>Welcome to the API</h2>');
});

app.listen(7000, () => {
    console.log('server running at port 7000');
});
