import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Login() {
    return <Paper>
        <Grid container direction={"column"} gap={2} spacing={2}>
            <Grid>
                <TextField label={"Username"}/>
            </Grid>
        </Grid>
    </Paper>
}