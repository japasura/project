import {ApiUserEvents, getDateString, UserEvents} from "./useEvents";
import {host} from "../index";
import dayjs from "dayjs";

export default function useSetEvents(authToken: string){
    return async (events: UserEvents[]) => {
        const serverEvents :ApiUserEvents[] = events.map(e => {
            return {
                start_time: dayjs(e.startDate).unix(),
                end_time: dayjs(e.endDate).unix(),
                type: e.title
            }
        })
        const d_str = getDateString(new Date())
        const res = await fetch(host+"/dayData/" + d_str + "/events", {
            method: "POST",
            headers: {
                "Api-Key": authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serverEvents)
        })
        const j = await res.json()
        console.log(j)
    }
}