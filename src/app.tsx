import {ReactNode} from "react";
import DateTimeSelection from "./DateTimeSelection";
import TextField from "@mui/material/TextField";
import Scheduler from "./Scheduler";
import Grid from "@mui/material/Grid";

const TableItem = (props: { children?: ReactNode }) => {
    return <td className={"border w-20 text-center"}>
        {props.children}
    </td>
}

function HeadingRow() {
    const nums = ['00-15', '15-30', '30-45', '45-00']

    return <tr className={"border"}>
        <TableItem/>
        {nums.map((k, v) => {
            return <TableItem key={v}>{k}</TableItem>
        })}
        <TableItem/>
        <TableItem/>
        {nums.map((k, v) => {
            return <TableItem key={v}>{k}</TableItem>
        })}
    </tr>
}

function TimeTrackerBody() {
    const hours = Array.from(Array(12).keys())
    const arr = Array.from(Array(4).keys());
    return <>
        {hours.map((h, i) => {
            return <tr key={i}>
                <TableItem>{h}</TableItem>
                {arr.map(i => {
                    return <TableItem key={i}/>
                })}
                <TableItem/>
                <TableItem>{h + 12}</TableItem>
                {arr.map(i => {
                    return <TableItem key={i}/>
                })}
            </tr>
        })}
    </>
}

function TimeSelector() {
    const hours = Array.from(Array(24).keys())
    const minutes = ['00-15', '15-30', '30-45', '45-00']

    return <div className={"flex flex-row gap-3"}>
        <div className={"flex gap-1 flex-row items-center"}>
            <label>Hour</label>
            <select
                className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" + " focus-visible:border-gray-800"}>
                {hours.map(h => {
                    return <option key={h} value={h}>{h}</option>
                })}
            </select>
        </div>
        <div className={"flex gap-1 flex-row items-center"}>
            <label>Minutes</label>
            <select
                className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" + " focus-visible:border-gray-800"}>
                {minutes.map(h => {
                    return <option key={h} value={h}>{h}</option>
                })}
            </select>
        </div>
    </div>
}

function TimeTrackerControls() {

    const submit = () => {
        alert("Submitting!")
    }

    const cancel = () => {
        alert("Clearing")
    }

    return <Grid container direction={"column"} gap={2} padding={2} alignContent={"center"}>
        <Grid>
            <TextField label={"Task"}/></Grid>
        {/*<TimeSelector/>*/}
        <Grid>
            <select value={0}
                    className={"p-3 bg-inherit border border-gray-800 rounded focus-visible:border" + " focus-visible:border-gray-800"}>
                <option value={0} disabled={true}>Color</option>
                <option>Red</option>
            </select>
        </Grid>
        <Grid>
            <DateTimeSelection label={"Start"}/>
        </Grid>
        <Grid>
            <DateTimeSelection label={"End"}/>
        </Grid>
        <Grid container gap={1}>
            <button className={"border p-3 border-gray-200 shadow text-blue-600 uppercase text-sm rounded"}
                    onClick={submit}>Save
            </button>
            <button className={"border p-3 border-gray-200 shadow text-red-600 uppercase text-sm rounded"}
                    onClick={cancel}>Cancel
            </button>
        </Grid>
    </Grid>
}

export default function App() {
    return <Grid container direction={"row"} gap={3}>
        {/*<h1 className={"text-3xl font-bold"}>Clocker</h1>*/}
        <Grid sm={8}>
            <Scheduler/>
        </Grid>
        <Grid sm={3}>
            <TimeTrackerControls/>
        </Grid>
    </Grid>
}
