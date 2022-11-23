import * as React from "react";
import {useEffect, useState} from "react";
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import useEvents, {getDateString} from "./hooks/useEvents";
import useSetEvents from "./hooks/useSetEvents";
import useAnalytics from "./hooks/useAnalytics";
import PieChart from "./PieChart";
import {DateNavigator} from '@devexpress/dx-react-scheduler-material-ui';
import {ViewState} from "@devexpress/dx-react-scheduler";

export default function App(props: { authToken: string }) {
    const [date, setDate] = useState(getDateString(new Date()))
    const [startDate, setStartDate] = useState({date: ""})
    const {events: schedulerData, setEvents: setSchedulerData} = useEvents(props.authToken, date)
    const updateEvents = useSetEvents(props.authToken, date)
    const analytics = useAnalytics(props.authToken, startDate.date)
    console.log(analytics)
    let analytics_labeled
    if(analytics!==null) {
        analytics_labeled = analytics?.analytics.map((s: string) => {
            const arr = s.split(":")
            return {
                label: arr[0], time: arr[1]
            }

        })
    }
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
        {/*<Grid>*/}
        {/*    <ViewState currentDate={startDate.date}/>*/}
        {/*    <DateNavigator/>*/}
        {/*    <PieChart analytics={analytics_labeled}/>*/}
        {/*</Grid>*/}
    </Grid>
}
