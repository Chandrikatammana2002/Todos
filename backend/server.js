import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routers from "./routes/TodoRoute.js";


dotenv.config();

const app = express();


// Enable CORS
app.use(cors(
    {
        origin:["https://todos.vercel.app"],
        methods:["POST","GET"],
        credentials:true`
    }
));

// Parse JSON request bodies
app.use(express.json());


 //at deployment to get hello
app.get("/",(req,res)=>{
   res.json("hello chandu");
})

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
