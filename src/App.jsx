import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from './atoms';
 

function App() {

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

 function MainApp(){
    const[networkCount]=useRecoilState(notifications); 
    const totalNotificationCount=useRecoilValue(totalNotificationSelector);

    // useEffect(()=>{
    //     axios.get('https://sum-server.100xdevs.com/notifications')
    //     .then((res)=>{
    //       setNetworkCount(res.data);
    //     })
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])


    return(
      <>
        <button>home</button>

          <button>my networks{networkCount.network >=100? "99+":networkCount.network} </button>
          <button>jobs{networkCount.jobs} </button>
          <button>messaging{networkCount.messaging} </button>
          <button>notifications{networkCount.notifications} </button>


          <button>Me {totalNotificationCount} </button>
      </>
    )
 }

 

export default App;
