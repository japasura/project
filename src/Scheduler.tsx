import * as React from 'react';
import Paper from '@mui/material/Paper';
import {ViewState} from '@devexpress/dx-react-scheduler';
import {Appointments, DayView, Scheduler,} from '@devexpress/dx-react-scheduler-material-ui';
import useEvents from "./hooks/useEvents";


export default () => {

    const [schedulerData] = useEvents()
    return <Paper sx={{p: 2}}>
        <Scheduler data={schedulerData}>
            <ViewState currentDate={'2022-11-16'}/>
            <DayView startDayHour={6} endDayHour={24}/>
            <Appointments/>
        </Scheduler>
    </Paper>
};
