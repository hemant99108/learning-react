import { atom, selector } from "recoil";
 


export const networkAtom=atom({
    key:'networkAtom',
    default:104
})

export const jobskAtom=atom({
    key:'jobskAtom',
    default:104
})

export const notificationAtom=atom({
    key:'notificationAtom',
    default:104
})

export const messagingAtom=atom({
    key:'messagingAtom',
    default:104
})

//this will be like the useMemo i.e. on any value change render again 

export const totalNotificationSelector=selector({
    key:'totalNotificationSelector',
    get:({get})=>{
        const networkAtomCount=get(networkAtom);
        const jobsAtomCount=get(jobskAtom);
        const notificationAtomCount=get(notificationAtom);
        const messagingAtomCount=get(messagingAtom);

        return networkAtomCount+ jobsAtomCount + notificationAtomCount + messagingAtomCount
    }
})