import {
    Chart,
    PieSeries,
    Title,
    Legend
} from '@devexpress/dx-react-chart-material-ui';
import Paper from "@mui/material/Paper";

export default function PieChart({analytics} : {analytics: any}) {
    return (
        <Paper>
            <Chart data={analytics}>
                <PieSeries
                    valueField="time"
                    argumentField="label"
                />
                <Title
                    text="Overview of activities"
                />
                <Legend />
            </Chart>
        </Paper>
    );
}