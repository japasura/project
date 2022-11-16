import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
    { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    { startDate: '2018-11-01T14:00', endDate: '2018-11-01T14:30', title: 'Go to a gym2' },
    { startDate: '2018-11-01T15:00', endDate: '2018-11-01T15:30', title: 'Go to a gym3' },
    { startDate: '2018-11-01T17:20', endDate: '2018-11-01T17:30', title: 'Go to a gym4' },
    { startDate: '2018-11-01T19:50', endDate: '2018-11-01T21:30', title: 'Go to a gym5' },

];

export default () => (
    <Paper sx={{p: 2}}>
        <Scheduler
            data={schedulerData}
        >
            <ViewState
                currentDate={currentDate}
            />
            <DayView
                startDayHour={9}
                endDayHour={22}
            />
            <Appointments />
        </Scheduler>
    </Paper>
);
