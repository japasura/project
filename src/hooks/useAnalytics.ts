import {useEffect, useState} from "react";
import {host} from "../index";
import {getDateString} from "./useEvents";

export interface AnalyticsData {
    start_date: string,
    end_date: string,
    analytics: any
}

export default function useAnalytics(authToken: string, startDate: string) {
    const [details, setDetails] = useState<AnalyticsData>()

    useEffect(() => {
        fetch(host + "/analytics", {
            method: "POST", headers: {
                "Api-Key": authToken, "Content-Type": "application/json"
            }, body: JSON.stringify({
                start_date: startDate, end_date: getDateString(new Date())
            })
        }).then(r => {
            r.json().then(data => {
                setDetails(data)
            })
        })
    }, [authToken, startDate])

    return details
}