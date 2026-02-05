import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Use a global cache to prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    // If already connected, reuse it
    if (cached.conn) {
        return cached.conn;
    }

    // If no connection is in progress, create one
    if (!cached.promise) {
        if (!MONGODB_URI) {
            throw new Error(
                'Please define the MONGODB_URI environment variable inside .env.local'
            );
        }

        const options = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, options);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}

export default connectDB;
