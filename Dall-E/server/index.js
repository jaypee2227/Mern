import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./cofig/db.js"


dotenv.config();

connectDB()

const app = express();

app.use(cors())
app.use(express.json({limit : "50mb"}))

app.get("/", (req,res)=>{
    res.send("Hello World!")
})

const PORT = 8000; 

const startServer = () => {
    try {
        connectDB()
        app.listen(PORT, ()=>{
            console.log(`Port is Running at PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

