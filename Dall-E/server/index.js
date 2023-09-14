import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

//config
dotenv.config();
//rest app creating for express
const app = express();


//using middlewares
app.use(cors())
app.use(express.json({limit : "50mb"}))

//routing done here
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)


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

startServer();

