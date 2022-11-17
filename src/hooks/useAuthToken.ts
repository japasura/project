import {useEffect, useState} from "react";
import {host} from "../index";

export default function useAuthToken() {
    const [auth, setAuth] = useState("")
    useEffect(() => {
        fetch(host + "/token").then(r => r.json().then(j => {
            setAuth(j.token)
        }))
    }, [])
    return auth
}