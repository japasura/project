import Grid from "@mui/material/Grid";
import {Box, Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import DateTimeSelection from "./DateTimeSelection";
import {Dispatch, SetStateAction, useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import {UserEvents} from "./hooks/useEvents";

export default function TimeTrackerControls({setEvents}: { setEvents: Dispatch<SetStateAction<UserEvents[]>> }) {
    const [t1, setT1] = useState<Dayjs | null>(dayjs())
    const [t2, setT2] = useState<Dayjs | null>(dayjs())

    const [taskType, setTaskType] = useState("sleep")

    const changeTaskType = (e: SelectChangeEvent) => {
        setTaskType(e.target.value)
    }

    const cancel = () => {
        setT1(null)
        setT2(null)
        setTaskType("sleep")
    }

    const submit = () => {
        setEvents(e => {
            return [...e, {
                startDate: t1?.toISOString() as string,
                endDate: t2?.toISOString() as string,
                title: taskType
            }]
        })
    }

    return <Box sx={{position: "sticky"}}>
        <Container maxWidth={"xs"}>
            <Grid container direction={"column"} gap={2} padding={2} alignItems={"center"}>
                <Grid width={"100%"}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Task</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={taskType}
                            onChange={changeTaskType}
                        >
                            <MenuItem value={"sleep"}>Sleep</MenuItem>
                            <MenuItem value={"food"}>Food</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    <DateTimeSelection value={t1} setValue={setT1} label={"Start"}/>
                </Grid>
                <Grid>
                    <DateTimeSelection value={t2} setValue={setT2} label={"End"}/>
                </Grid>
                <Grid container gap={1} justifyContent={"space-around"}>
                    <Button color={"secondary"} onClick={cancel}>Reset</Button>
                    <Button color={"primary"} onClick={submit} variant={"contained"}>Save</Button>
                </Grid>
            </Grid>
        </Container>
    </Box>
}