import connectToDatabase from './db/connectToDatabase.js';
import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config();

connectToDatabase()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error while connecting to db: ', error);
    });
