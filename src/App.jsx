/* eslint-disable react/prop-types */
 
import axios from "axios";
import {  useEffect, useState } from "react";
 

function useTodos(n){
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
       axios.get('https://sum-server.100xdevs.com/todos')
       .then((res)=>{
        setTodos(res.data.todos);
        setLoading(false);
       })
    },[n])

    return {todos,loading};
}

 
 function App(){
    const {todos,loading}=useTodos(500);

  return <>      
    {loading &&  <div>
        loading...
    </div>}
      {todos&& todos.map((todo,i)=>{
        return <RenderTodo key={i} todo={todo}/>
      })}
  </>
 }

function RenderTodo({todo}){
    return <div>
        <h3>{todo.title} </h3>
        <br />
        <h3>{todo.description} </h3>

    </div>
}
 

export default App;