import {useEffect, useState} from "react";
import {host} from "../index";

export interface UserEvents {
    startDate: string,
    endDate: string,
    title: string
}

interface ApiUserEvents {
    start_time: number,
    end_time: number,
    type: string
}

export default function useEvents(authToken: string){
    const [events, setEvents] = useState<Array<UserEvents>>([])
    const date = new Date()
    const d_str = `${date.getFullYear()}-${date.getMonth() +1}-${11}`
    console.log()
    useEffect(()=> {
        fetch(host+"/dayData/" + d_str + "/events", {headers: {"Api-Key": authToken}}).then(resp => {
            if (resp.ok){
                resp.json().then((j: Array<ApiUserEvents>) => {
                    const sv: Array<UserEvents> = j.map(s => {
                        const start = new Date(s.start_time * 1000)
                        const end = new Date(s.end_time * 1000)
                        return {
                            startDate:start.toISOString(),
                            endDate: end.toISOString(),
                            title: s.type
                        }
                    })
                    console.log(sv)
                    setEvents(sv)
                })
            }

        })
    }, [authToken, d_str])
    return {events, setEvents}
}