import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routers from "./routes/TodoRoute.js";


dotenv.config();

const app = express();


// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());




//connect to database

mongoose.connect("mongodb+srv://chandrikatammana2002:chandrika2002@cluster0.tzm23qv.mongodb.net/CompanyDB?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=>{console.log("connected to database")}).catch((err)=>{console.log({err})});


app.use(routers)


app.listen(5000,()=>{
    console.log("server running....")
})
