import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URI) {
        return console.log("Missing MONGODB_URI");
    }

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "awas"
        } as mongoose.ConnectOptions)

        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
};