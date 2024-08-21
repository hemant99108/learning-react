import { RecoilRoot, useRecoilState, useRecoilValue  } from "recoil";
import { jobskAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";
 

function App() {

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount=useRecoilValue(jobskAtom);

  const notificationAtomCount=useRecoilValue(notificationAtom);
  const messagingAtomCount=useRecoilState(messagingAtom);

  const totalNotificationAtomCount=useRecoilValue(totalNotificationSelector);


  return (
    <>
      <button>Home</button>

      <button>My Network({networkNotificationCount>=100?"99+":networkNotificationCount}) </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications({notificationAtomCount})</button>
 
      <button>Me{totalNotificationAtomCount}</button>
    </>
  );
}


 

export default App;
