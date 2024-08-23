import { useEffect, useState } from "react";
 

 function useDebounce(value,delay){

    const[debouncedValue,setDebouncedValue]=useState(value);

    useEffect(()=>{
        const timerId=setTimeout(() => {
            setDebouncedValue(value);
        },delay);

        return ()=>{
            clearTimeout(timerId);
        }
    },[value,delay]);

    return debouncedValue;

 }

 function App(){
    const [inputValue ,setInputValue]=useState('');

    const debouncedValue=useDebounce(inputValue,500);



    return <div>
            Debounced value is {debouncedValue}     
        <input type="text" value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)} 
        placeholder="Search ... " />
    </div>

 }



 export default App;