const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors")
//const connectDBs = require("./mongodb/connectDBs.js")

const app = express();

//dotenv config
dotenv.config();

//calling ConnectDB Function from mongodb folder.
//connectDBs()

app.use(express.json({limit:"50mb"}))
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Hello From DALL-E AI")
})

const PORT = 8080 

app.listen(PORT, ()=>{
    console.log(`Node application Running on PORT ${PORT}`)
})