import { useEffect, useState } from "react";
import "./App.css";
import Displaycontent from './Displaycontent';

function App() {
  const [val, setval] = useState({ name: "", address:""});
  const [data,setdata]=useState([]);//take an array and populate over there 

  const[errors,setErrors]=useState({});
  
  useEffect(()=>{
    const savedData=localStorage.getItem("data");

    if(savedData){
      setdata(JSON.parse(savedData));
    }
  },[])

  const validate=()=>{
    let tempErrors={};

    if(!val.name)tempErrors.name="name is required";
    if(!val.address)tempErrors.address="address is required";


    setErrors(tempErrors);
    return Object.keys(tempErrors).length===0;  //return true if no errors 
  }


  const handlechange=(e)=>{
    const {name,value}=e.target;

     setval((val)=>({
      ...val,
      [name]:value
     }))
  }

  const handlesubmit=(e)=>{
      e.preventDefault();

      if(validate()){
        setdata((prev)=>[...prev,val]);
        setval({name:"",address:""});//clear after submission 
        setErrors({});
      }
  }

   return (

      <>

        <div className="px-3 py-3 bg-slate-50 flex justify-between ">

        {errors.name && <span className="error-text">{errors.name}</span>}
        {errors.address && <span className="error-text">{errors.address}</span>}

            <label  >name</label>
            <input type="text"  name="name" value={val.name} onChange={handlechange}  />  
            <label >address</label> 
            <input type="text" name="address" value={val.address} onChange={handlechange}  /> 
        </div>

          <button className=" bg-blue-300 px-3 py-3 " type="submit" 
          onClick={handlesubmit}  
        >populate data</button>



      <Displaycontent props={data}/>

      </>

   )

  }

export default App;



