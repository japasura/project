import * as React from "react";
import {useState} from "react";
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import useEvents, {getDateString} from "./hooks/useEvents";
import useSetEvents from "./hooks/useSetEvents";
import useAnalytics from "./hooks/useAnalytics";

export default function App(props: { authToken: string }) {
    const [date, setDate] = useState(getDateString(new Date()))
    const [startDate, setStartDate] = useState({date: '2022-11-01'})
    const {events: schedulerData, setEvents: setSchedulerData} = useEvents(props.authToken, date)
    const updateEvents = useSetEvents(props.authToken, date)
    const analytics = useAnalytics(props.authToken, startDate.date)

    console.log(analytics)
    let analytics_labeled
    if (analytics !== null) {

    }

    if (props.authToken === null) {
        return null
    }

    return <Grid container direction={"row"} gap={3}>
        <Grid sm={8}>
            <TimeSheet setDate={setDate} curDate={date} events={schedulerData} setEvents={setSchedulerData}
                       updateEvents={updateEvents}/>
        </Grid>
        <Grid sm={3}>
            <TimeTrackerControls initDate={date} key={date} setEvents={setSchedulerData} updateEvents={updateEvents}/>
        </Grid>
        {/*<Grid>*/}
        {/*    <ViewState currentDate={startDate.date}/>*/}
        {/*    <DateNavigator/>*/}
        {/*    <PieChart analytics={analytics_labeled}/>*/}
        {/*</Grid>*/}
    </Grid>
}
