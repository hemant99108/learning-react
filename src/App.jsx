/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";
 

function App() {

  return <RecoilRoot>
      <startTransition>
      <Todo id={1}/>
      <Todo id={2}/>
      </startTransition>
  </RecoilRoot>
}


function Todo({id}){

  const currentTodo=useRecoilValue(todosAtomFamily(id));
  
  return <>
    {currentTodo.title}
    {currentTodo.description} 
    <br />
  </>
}
  
 

export default App;
