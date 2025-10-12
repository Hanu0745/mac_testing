
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h6>hello</h6>');
});

app.listen(7000, () => {
    console.log('server running at port 7000');
});
