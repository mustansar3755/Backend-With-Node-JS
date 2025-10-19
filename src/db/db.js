// !DB Connection(DATABASE is like another content mean's it takes time to respond so we will make connection by async await approch)
// !Also during Database connection we may face errors so it's better to keep in (try catch method 0r with promises)

import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `MongoDB Connect !! DB HOST : ${connectionInstant.connection.host}`
    )
  } catch (error) {
    console.log('MongoDB connection Error !!', error)
  }
}

export default connectDB
