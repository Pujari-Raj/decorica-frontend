import { store } from "../app/store";
import { setAccessPath, setAccessToken, setUsername,setUserId } from "../features/authenticate/authSlice";


export function setAuthUsername(username){
    store.dispatch(setUsername(username));
}

export function fetchAccessToken(token){
    store.dispatch(setAccessToken(token));
}

export function storeAcessPath(path){
    store.dispatch(setAccessPath(path))
}
export function storeUserId(userid){
    store.dispatch(setUserId(userid))
}