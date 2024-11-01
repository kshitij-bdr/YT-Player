import connectToDatabase from './db/connectToDatabase.js';
import dotenv from 'dotenv';

dotenv.config();

connectToDatabase()
    .then(() => {})
    .catch((error) => {
        console.error('Error while connecting to db: ', error);
    });
