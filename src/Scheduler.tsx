import * as React from 'react';
import Paper from '@mui/material/Paper';
import {ViewState} from '@devexpress/dx-react-scheduler';
import {Appointments, DayView, Scheduler,} from '@devexpress/dx-react-scheduler-material-ui';
import {getDateString, UserEvents} from "./hooks/useEvents";

export default function TimeSheet({events}: {events: Array<UserEvents> }) {
    console.log(events)
    return <Paper sx={{p: 2}}>
        <Scheduler data={events}>
            <ViewState currentDate={getDateString(new Date())}/>
            <DayView startDayHour={6} endDayHour={22}/>
            <Appointments/>
        </Scheduler>
    </Paper>
};
