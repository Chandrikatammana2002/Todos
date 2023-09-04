
import './App.css';
import {  addTodo, getAllTodo,updateTodo,deleteTodo } from './HandleApi';
import Todo from './components/Todo';
import { useEffect, useState } from 'react';


function App() {
  const [todo,setTodo]=useState([]);
  const [text,setText]=useState("");
  const [isUpdating,setIsupdating]=useState(false);
  const [todoId,settodoId]=useState("");


  const updateMode=(_id,text)=>{
    setIsupdating(true); //to get update button
    setText(text);   //to get text that is presented inn the todo list we need to update
    settodoId(_id);

  }
 



  useEffect(()=>{
    getAllTodo(setTodo)
  },[])

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App </h1>
        <div className="top">
          <input type="text" placeholder="add todos.."
            value={text} 
            onChange={(e)=>setText(e.target.value)}
            
          />
          <div 
             className="add"
             onClick={ isUpdating ?
               ()=>updateTodo(todoId,text,setTodo,setText) : 
               ()=>addTodo(text,setText,setTodo)
             } >
             {isUpdating ? "update":"add"}  {/*name of the button add or update based on isUpdating*/}
          </div>
        </div>
        <div className="list">
         {
            todo.map((item)=> < Todo 
            key={item._id} 
            text={item.text}
            updateMode={()=>updateMode(item._id,item.text)}
            deleteToDo={()=>deleteTodo(item._id,setTodo)}
           />)
        }
         
       </div>
      </div>
     
    </div>
  );
}

export default App;
