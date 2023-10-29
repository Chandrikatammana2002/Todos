import axios from 'axios';

const baseUrl="https://erin-comfortable-sockeye.cyclic.app/"; //url

const getAllTodo=(setTodo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log("data ----> ",data);
        setTodo(data)
    })
}

const addTodo=(text,setText,setTodo)=>{

    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllTodo(setTodo);
    })
    .catch((err)=>console.log(err))

}


const updateTodo=(todoId,text,setTodo,setText,setIsupdating)=>{

    axios.post(`${baseUrl}/update`,{_id:todoId,text})
    .then((data)=>{
        
        setText("");
        setIsupdating(false);
       
        getAllTodo(setTodo);
    })
    .catch((err)=>console.log(err))

}

const deleteTodo=(_id,setTodo)=>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAllTodo(setTodo);
    })
    .catch((err)=>console.log(err))
}



export {getAllTodo,addTodo,updateTodo,deleteTodo};
