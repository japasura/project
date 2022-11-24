import * as React from "react";
import {useEffect, useState} from "react";
import TimeSheet from "./Scheduler";
import Grid from "@mui/material/Grid";
import TimeTrackerControls from "./Controls";
import useEvents, {getDateString} from "./hooks/useEvents";
import useSetEvents from "./hooks/useSetEvents";
import useAnalyticsData from "./analytics_data";
import PieChart from "./PieChart";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Box, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

export default function App(props: { authToken: string }) {
    const [date, setDate] = useState(getDateString(new Date()))
    const [startDate, setStartDate] = useState("2022-11-01")
    const {error, events: schedulerData, setEvents: setSchedulerData} = useEvents(props.authToken, date)
    const updateEvents = useSetEvents(props.authToken, date)
    const analytics_labeled = useAnalyticsData(props.authToken, startDate)
    const navigate = useNavigate()
    useEffect(() => {
        updateEvents(schedulerData)
    }, [schedulerData])
    if (props.authToken === null) {
        return null
    }

    if (error){
        navigate("/")
        window.location.reload()
    }
    // for (var s in analytics?.analytics) {
    //     console.log(s, "now")
    //     const arr = s.split(":")
    //     return {
    //         label: arr[0], time: arr[1]
    //     }
    // }
    return <Grid container direction={"row"} gap={3}>
        <Grid xs={7}>
            <TimeSheet setDate={setDate} curDate={date} events={schedulerData} setEvents={setSchedulerData}
                       updateEvents={updateEvents}/>
        </Grid>
        <Grid xs={4} container direction={"column"} gap={2}>
            <Grid>
                <TimeTrackerControls initDate={date} key={date} setEvents={setSchedulerData}
                                     updateEvents={updateEvents}/>
            </Grid>
            <Divider orientation={"horizontal"} flexItem={true}></Divider>
            <Box>
<Typography variant={"h4"} align={"center"} >Statistics</Typography>
                <Grid container direction={"column"} gap={2} >
                    <Grid alignItems={"center"} >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Since"
                                inputFormat="DD/MM/YYYY"
                                value={startDate}
                                onChange={(v) => {
                                    if (v === null) {
                                        return;
                                    }
                                    const d = new Date(v)
                                    setStartDate(getDateString(d))
                                }
                                }
                                renderInput={(params: JSX.IntrinsicAttributes) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid>
                        <PieChart analytics={analytics_labeled}/>

                    </Grid> </Grid>
            </Box>
        </Grid>
    </Grid>
}
