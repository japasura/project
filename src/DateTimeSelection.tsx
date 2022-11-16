import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'


export default function DateTimeSelection({label}: {label: string}) {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );


    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    return <Card variant={"outlined"} sx={{minWidth: 100, maxWidth: 200, padding: 2}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container direction={"column"} maxWidth={"200px"} gap={2}>
                <Typography>{label}</Typography>

                <DesktopDatePicker
                    label="Date"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params: JSX.IntrinsicAttributes) => <TextField {...params} />}
                />
                <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params: JSX.IntrinsicAttributes) => <TextField {...params} />}
                />
            </Grid>
        </LocalizationProvider>
    </Card>

}