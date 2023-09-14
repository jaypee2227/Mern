const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();

//dotenv config
dotenv.config();

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Hello From DALL-E AI")
})

const PORT = 8080 

app.listen(PORT, ()=>{
    console.log(`Node application Running on PORT ${PORT}`)
})