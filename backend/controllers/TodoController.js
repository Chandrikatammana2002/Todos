
import TodoModel from "../models/TodoModel.js";


//get all the todos list
export const getTodo=async (req,res)=>{
    const toDo =await TodoModel.find()
    res.send(toDo)
}


//adding new todos to database
export const saveTodo=async (req,res)=>{
    const {text}=req.body;
    TodoModel.create({text}).then((data)=>{
        console.log("added successfully")
        console.log(data);
        res.send(data)
    })
}

//update the todos in database

export const updateTodo=async (req,res)=>{
    const {_id,text}=req.body;
    TodoModel.findByIdAndUpdate(_id, {text}).then(()=>res.send("updated successfully")).catch((err)=>console.log(err))
}


//delete todo

export const deleteTodo=async (req,res)=>{
    const {_id}=req.body;
    TodoModel.findByIdAndDelete(_id).then(()=>res.send("deleted successfully")).catch((err)=>console.log(err))
}


