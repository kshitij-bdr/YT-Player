import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import * as constants from '../constants.js';

const connectToDatabase = async () => {
    try {
        const connectionString = `${process.env.CONNECTION_URI}/${constants.DB_NAME}`;

        const connection = await mongoose.connect(connectionString);

        console.log(
            `Connected to MongoDB database: ${connection.connection.db.databaseName}`
        );
    } catch (error) {
        console.error('DB Connection failed: ', error);
        process.exit(1);
    }
};

export default connectToDatabase;
