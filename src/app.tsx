import {useEffect, useState} from "react";
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import useEvents, {getDateString} from "./hooks/useEvents";
import useSetEvents from "./hooks/useSetEvents";

export default function App(props: { authToken: string }) {
    const [date, setDate] = useState(getDateString(new Date()))
    const {events: schedulerData, setEvents: setSchedulerData} = useEvents(props.authToken, date)
    const updateEvents = useSetEvents(props.authToken, date)
    useEffect(() => {
        updateEvents(schedulerData)
    }, [schedulerData])
    if (props.authToken === null) {
        return null
    }

    return <Grid container direction={"row"} gap={3}>
        <Grid sm={8}>
            <TimeSheet setDate={setDate} curDate={date} events={schedulerData} setEvents={setSchedulerData}/>
        </Grid>
        <Grid sm={3}>
            <TimeTrackerControls initDate={date} key={date} setEvents={setSchedulerData}/>
        </Grid>
    </Grid>
}
