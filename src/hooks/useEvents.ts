import {useEffect, useState} from "react";

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

export default function useEvents(){
    const [events, setEvents] = useState<Array<UserEvents>>([])
    const date = new Date()
    const d_str = `${date.getFullYear()}-${date.getMonth() +1}-${11}`
    console.log()
    useEffect(()=> {
        fetch("http://122.166.189.206/dayData/" + d_str + "/events", {headers: {"Api-Key": "hi"}}).then(resp => {
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
    }, [])
    return {events, setEvents}
}