
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";



export default function App() {
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
