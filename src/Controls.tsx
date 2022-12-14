import Grid from "@mui/material/Grid";
import {Box, Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import DateTimeSelection from "./DateTimeSelection";
import {Dispatch, SetStateAction, useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import {UserEvents} from "./hooks/useEvents";

export default function TimeTrackerControls({setEvents, initDate, updateEvents}: { setEvents: Dispatch<SetStateAction<UserEvents[]>>, initDate: string, updateEvents: (_: UserEvents[]) => void }) {
    const [t1, setT1] = useState<Dayjs | null>(dayjs(initDate))
    const [t2, setT2] = useState<Dayjs | null>(dayjs(initDate))

    const [taskType, setTaskType] = useState("Sleep")

    const changeTaskType = (e: SelectChangeEvent) => {
        setTaskType(e.target.value)
    }

    const cancel = () => {
        setT1(null)
        setT2(null)
        setTaskType("Sleep")
    }

    const submit = () => {
        // if(dayjs(t2)>dayjs())
        //     alert("Time travel not possible")
        // else
            if(dayjs(t1)<dayjs(t2))
            setEvents(e => {
            const sv =  [...e, {
                startDate: t1?.toISOString() as string,
                endDate: t2?.toISOString() as string,
                title: taskType
            }]
                updateEvents(sv)
            return sv
            })
        else
            alert("To succeed you must start (End time lesser than start time)")
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
                            <MenuItem value={"Sleep"}>Sleep</MenuItem>
                            <MenuItem value={"Food/Daily Activities"}>Food/Daily Activities</MenuItem>
                            <MenuItem value={"Class"}>Class</MenuItem>
                            <MenuItem value={"Relaxing"}>Relaxing</MenuItem>
                            <MenuItem value={"Studying"}>Studying</MenuItem>
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