import * as React from 'react';
import Paper from '@mui/material/Paper';
import {Appointments, DayView, Scheduler,} from '@devexpress/dx-react-scheduler-material-ui';
import {getDateString, UserEvents} from "./hooks/useEvents";
import {ViewState} from "@devexpress/dx-react-scheduler";
import AppointmentProps = Appointments.AppointmentProps;
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Button, Dialog} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";

const bgColors = new Map()
bgColors.set("sleep", "#C45AB3")
bgColors.set("daily-activities", "#FF8811")
bgColors.set("class", "#3A1772")
bgColors.set("relaxing", "#B3001B")
bgColors.set("study", "#018E42")

const StyledAppointmentHOC = (p: {setEvents: Dispatch<SetStateAction<UserEvents[]>>}) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (props: AppointmentProps) => {
        const curEvent = props.data
        const doDelete = () => {
            p.setEvents(s => {
                return s.filter(i => {
                    console.log(i)
                    return  (i.title !== curEvent?.title || i.startDate !== curEvent.startDate || i.endDate !== curEvent.endDate)
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


export default function TimeSheet({events, onDoubleClick}: { events: Array<UserEvents>, onDoubleClick: () => void }) {
    // const handleChange = (newValue: Dayjs | null) => {
    //     setValue(newValue);
    // };
    const [date, setDate] = useState({curdate: getDateString(new Date())})

    return <Paper sx={{p: 2, overflowY: "scroll", maxHeight: "100vh"}}>
        <Scheduler data={events}>
            {/*<DateNavigator navigationButtonComponent={}/>*/}
            {/*<Date*/}
            {/*<TodayButton buttonComponent={}/>*/}
            {/*<DateNavigator rootComponent={undefined} overlayComponent={undefined} openButtonComponent={undefined} navigationButtonComponent={undefined}/>*/}
            <ViewState currentDate={date.curdate}/>
            <DayView startDayHour={6} endDayHour={22}/>
            <Appointments appointmentComponent={StyledAppointmentHOC(onDoubleClick)}/>
        </Scheduler>
    </Paper>
};
