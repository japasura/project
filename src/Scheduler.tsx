import * as React from 'react';
import {Dispatch, SetStateAction, useState} from 'react';
import Paper from '@mui/material/Paper';
import {Appointments, DayView, Scheduler, TodayButton} from '@devexpress/dx-react-scheduler-material-ui';
import {getDateString, UserEvents} from "./hooks/useEvents";
import { Toolbar, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Button, Dialog} from "@mui/material";
import AppointmentProps = Appointments.AppointmentProps;
import {ViewState} from "@devexpress/dx-react-scheduler";

const bgColors = new Map()
bgColors.set("Sleep", "#C45AB3")
bgColors.set("Food/Daily Activities", "#FF8811")
bgColors.set("Class", "#3A1772")
bgColors.set("Relaxing", "#B3001B")
bgColors.set("Studying", "#018E42")

const StyledAppointmentHOC = (p: { setEvents: Dispatch<SetStateAction<UserEvents[]>> }) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (props: AppointmentProps) => {
        const curEvent = props.data
        const doDelete = () => {
            p.setEvents(s => {
                return s.filter(i => {
                    console.log(i)
                    return (i.title !== curEvent?.title || i.startDate !== curEvent.startDate || i.endDate !== curEvent.endDate)
                })
            })
            setDialogOpen(false)
        }
        return <Appointments.Appointment {...props} onDoubleClick={() => setDialogOpen(true)}
                                         style={{backgroundColor: bgColors.get(props.data.title), fontSize: "1em"}}>
            {props.children}
            <Dialog open={dialogOpen} onClose={() => {
                setDialogOpen(false)
            }}>
                <Grid container p={2} direction={"row"} alignItems={"baseline"} gap={1}>
                    <Typography variant={"h6"}>Click to</Typography>
                    <Grid><Button onClick={doDelete} variant={"contained"} color={"secondary"}>Delete</Button></Grid>
                </Grid>
            </Dialog>
        </Appointments.Appointment>
    }
}

interface TimeSheetProps {
    events: Array<UserEvents>,
    setEvents: Dispatch<SetStateAction<UserEvents[]>>,
    curDate: string,
    setDate: Dispatch<SetStateAction<string>>
}

export default function TimeSheet({events, setEvents, curDate, setDate}: TimeSheetProps) {

    return <Paper sx={{p: 2, overflowY: "scroll", maxHeight: "100vh"}}>
        <Scheduler data={events}>
            <Toolbar/>
            {/*<DateNavigator navigationButtonComponent={}/>*/}
            <ViewState currentDate={curDate} onCurrentDateChange={(s) => {setDate(getDateString(s))}}/>
            <DateNavigator/>
            <TodayButton/>
            <DayView startDayHour={6} endDayHour={22}/>
            <Appointments appointmentComponent={StyledAppointmentHOC({setEvents: setEvents})}/>
        </Scheduler>
    </Paper>
};
