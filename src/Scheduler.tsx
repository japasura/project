import * as React from 'react';
import Paper from '@mui/material/Paper';
import {IntegratedEditing, ViewState} from '@devexpress/dx-react-scheduler';
import {Appointments, DayView, Scheduler,} from '@devexpress/dx-react-scheduler-material-ui';
import useEvents from "./hooks/useEvents";


export default () => {
    const [schedulerData] = useEvents()
    return <Paper sx={{p: 2}}>
        <Scheduler data={schedulerData}>
            <ViewState currentDate={'2022-11-16'}/>
            <IntegratedEditing />
            <DayView startDayHour={0} endDayHour={24}/>
            <Appointments/>
        </Scheduler>
    </Paper>
};
//
//
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//     Scheduler,
//     MonthView,
//     Toolbar,
//     DateNavigator,
//     Appointments,
//     TodayButton,
// } from '@devexpress/dx-react-scheduler-material-ui';
//
// import { appointments } from '../../../demo-data/month-appointments';
// import useEvents from "./hooks/useEvents";
//
// export default class Demo extends React.PureComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: = useEvents()
//         };
//     }
//
//     render() {
//         const { data } = this.state;
//
//         return (
//             <Paper>
//                 <Scheduler
//                     data={data}
//                 >
//                     <ViewState
//                         defaultCurrentDate="2018-07-27"
//                     />
//                     <MonthView />
//                     <Toolbar />
//                     <DateNavigator />
//                     <TodayButton />
//                     <Appointments />
//                 </Scheduler>
//             </Paper>
//         );
//     }
// }
