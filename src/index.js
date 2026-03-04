//require('dotenv').config({path: './env'})    --------> we are not using common js, we are using module js, so we will not use this type of practice (doing this will give no error)
import dotenv from "dotenv"   // we also have to config the dotenv file
import connectDB from "./db/index.js";
import express from "express";
const app = express();

//configuring the dotenv file
dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo db connection failed!!!", err);
})





/*
//This is an approach where the DB call and its code (everything) is in the starting file i.e. index.js

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();
//put ; at the start of IIFE, to ensure the last statement has a ; but in this case we know this is the start so we don't have to put ;
//start of IIFE
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/