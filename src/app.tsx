import {useEffect} from "react";
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import useEvents from "./hooks/useEvents";
import useSetEvents from "./hooks/useSetEvents";

export default function App(props: { authToken: string }) {
    const {events: schedulerData, setEvents: setSchedulerData} = useEvents(props.authToken)
    const updateEvents = useSetEvents(props.authToken)
    useEffect(() => {
        updateEvents(schedulerData)
    }, [schedulerData])


    return <Grid container direction={"row"} gap={3}>
        <Grid sm={8}>
            <TimeSheet events={schedulerData} setEvents={setSchedulerData}/>
        </Grid>
        <Grid sm={3}>
            <TimeTrackerControls setEvents={setSchedulerData}/>
        </Grid>


    </Grid>
}
