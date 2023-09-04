import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

export default mongoose.model("TodoModel", todoSchema);