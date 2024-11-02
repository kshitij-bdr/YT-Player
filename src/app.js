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

//import routes

import userRoutes from './routes/user.routes.js';

//routes declaration

app.use('/api/v1/users', userRoutes);

export { app };
