import {host} from "../index";

export default function useLogin(authToken: string){
    return async (username: string, password: string) => {
        const res = await fetch(host + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": authToken
            },
            body: JSON.stringify({username: username, password: password})
        })
        const j = await res.json()
        return j.success
    }
}