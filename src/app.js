import express from 'express';
import cors from 'cors';
import * as constants from './constants.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: constants.LIMIT }));
app.use(express.urlencoded({ limit: constants.LIMIT, extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('<h1>Running...</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
