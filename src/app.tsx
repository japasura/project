
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import {useState} from "react";



export default function App() {
    const [event, setEvent] = useState({})
    return <Grid container direction={"row"} gap={3}>
        {/*<h1 className={"text-3xl font-bold"}>Clocker</h1>*/}
        <Grid sm={8}>
            <TimeSheet/>
        </Grid>
        <Grid sm={3}>
            <TimeTrackerControls/>
        </Grid>
    </Grid>
}
