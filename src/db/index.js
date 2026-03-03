import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1)  // we could have also done throw error, but doing process.exit, exits with a exit code
    }
}

export default connectDB




/*
// db/index.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      family: 4,
      tls: true,
      tlsAllowInvalidCertificates: true, // Remove this in production!
    });
    console.log(`\n✅ MongoDB connected! HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ MONGODB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
*/