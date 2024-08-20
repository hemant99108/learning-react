 import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

/*
 its same like the usestate hook only diff is that its somehow creates a global context and 
the main children using its variable must use the recoilroot as the wrapper to them 
  its likely as the usestate as :
          const [useRecoilValue,useSetRecoilvalue]=useRecoilState();
          userecoilvalue(atom created )-->count value
          useSetRecoilState(atomcount) --setcount 
          
          selector--- render when the count value is even or odd 

          note -->we can require them as per our need in the component either one of them or both at a time 
 */


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  //we can use below ,but above is more performant than it ,we required the one state variable 
  // const[count,setCount]=useRecoilState(countAtom);

  return <div>
    <b>
    {count} 
    </b>

    <EvenCountRenderer/>
  </div>;
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven?"its even ":null}
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  //we dont need the count ,only the setcount so we have to use the setcount with the 
  //c=>c+1  this wil use the current value and return to the setcount 

  const setCount=useSetRecoilState(countAtom); 

  return (
    <div>
      <button onClick={() => setCount(count=> count + 1)}>increase</button>
      <button onClick={() => setCount(count=> count - 1)}>decrease</button>
    </div>
  );
}

export default App;
