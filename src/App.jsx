/* eslint-disable react/jsx-key */
 
import { useState } from "react";
import "./App.css";
 

function App() {

  const [val,setval]=useState([1,2,3,4,5]);

   return (
      <div className="p-5">
          {val.map(item=>(<h1>{item}</h1>))}

          <button onClick={()=>setval(()=>val.filter((ele,index)=>index!=0))} className="px-2 py-2 bg-blue-200 rounded-lg ">filter array</button>
      </div>
      
   )

  }

export default App;



