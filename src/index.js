// require('dotenv').config({path:'../.env'})

import dotenv  from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path:"./env"
})


connectDB()

























/*
import mongoose from 'mongoose'
import { DB_NAME } from '../constants'


/*
//* WE here connect DB With IFFE (Imediate Inoke Function)
;async () => {
  // * Try Catch so that we can Handle Error's

  try {
    //* MongoDB connection Code

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("Error ",error)})
  } catch (error) {
    console.log('MongoDB Connection failed : ', error)
  }
}

*/