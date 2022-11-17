import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DateTimeSelection from "./DateTimeSelection";

export default function TimeTrackerControls() {

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