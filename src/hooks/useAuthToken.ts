import {useState} from "react";

export default function useLogin(){
    const [auth, setAuth] = useState("")

    return auth
}