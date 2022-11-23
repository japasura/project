import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Paper from "@mui/material/Paper";

export default function PieChart({analytics} : {analytics: any}) {
    return (
        <Paper>
            <Chart
                data={analytics}
            >
                <PieSeries
                    valueField="time"
                    argumentField="label"
                />
                <Title
                    text="Overview of activities"
                />
                <Animation />
            </Chart>
        </Paper>
    );
}