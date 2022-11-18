import * as React from 'react';
import Paper from '@mui/material/Paper';
import {Appointments, DayView, Scheduler,} from '@devexpress/dx-react-scheduler-material-ui';
import {getDateString, UserEvents} from "./hooks/useEvents";
import {ViewState} from "@devexpress/dx-react-scheduler";
import AppointmentProps = Appointments.AppointmentProps;
import {useState} from "react";

const bgColors = new Map()
bgColors.set("sleep", "#C45AB3")
bgColors.set("daily-activities", "#FF8811")
bgColors.set("class", "#3A1772")
bgColors.set("relaxing", "#B3001B")
bgColors.set("study", "#018E42")

const StyledAppointmentHOC = (onDoubleClick: () => void) => {
    return (props: AppointmentProps) => {
        return <Appointments.Appointment {...props} onDoubleClick={onDoubleClick}
                                         style={{backgroundColor: bgColors.get(props.data.title), fontSize: "1em"}}>
            {props.children}
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
