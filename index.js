import dotenv  from 'dotenv';
// Must be Import oon 1st line (doten)
import express from 'express'

const app = express();

app.get("/",(req,res)=>{
    res.send("Main Page ")
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log('Expresss connected');
})