import {useState} from "react";
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import useEvents, {UserEvents} from "./hooks/useEvents";

export default function App(props: {authToken: string}) {
    const [event, setEvent] = useState<UserEvents>({startDate: "", endDate: "", title: ""})
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent(s => ({...s, [e.target.name]: e.target.value}))
    }
    const {events: schedulerData, setEvents: setSchedulerData} = useEvents(props.authToken)
    return <Grid container direction={"row"} gap={3}>
        <Grid sm={8}>
            <TimeSheet events={schedulerData}/>
        </Grid>
        <Grid sm={3}>
            <TimeTrackerControls/>
        </Grid>
    </Grid>
}
