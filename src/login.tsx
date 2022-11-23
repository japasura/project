import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Box, Button, Divider, Chip} from "@mui/material"
import {useState} from "react";
import useLogin from "./hooks/useLogin";
import useCreateAccount from "./hooks/useCreateAccount";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Login(props: { authToken: string }) {
    const [state_1, setState_1] = useState({username: "", password: ""})
    const [state_2, setState_2] = useState({username: "", password: ""})
    const login = useLogin(props.authToken)
    const createaccount = useCreateAccount(props.authToken)
    const navigate = useNavigate()

    const onChange_1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState_1({...state_1, [e.target.name]: e.target.value})
    }
    const onChange_2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState_2({...state_2, [e.target.name]: e.target.value})
    }

    const onSubmit_1 = () => {
        login(state_1.username, state_1.password).then(r => {
            if (r) {
                navigate("/dashboard")
            }
        })
    }

    const onSubmit_2 = () => {
        createaccount(state_2.username, state_2.password).then(r => {
            if (r) {
                alert("Sign In with your new credentials")
            }
        })
    }

    return <Box p={2}>
        <Paper>
            <Grid container direction={"column"} alignItems={"center"} gap={2} p={2}>
                <Grid>
                    <Typography variant={"h3"}> TTYL </Typography>
                </Grid>
                <Grid>
                    <TextField label={"Username"} name={"username"} onChange={onChange_1}/>
                </Grid>
                <Grid>
                    <TextField label={"Password"} type={"password"} name={"password"} onChange={onChange_1}/>
                </Grid>
                <Grid>
                    <Button onClick={onSubmit_1}>Login</Button>
                </Grid>
                <Divider orientation="horizontal" flexItem>
                    <Chip label="OR"/>
                </Divider>
                <Grid>
                    <TextField label={"Username"} name={"username"} onChange={onChange_2}/>
                </Grid>
                <Grid>
                    <TextField label={"Password"} type={"password"} name={"password"} onChange={onChange_2}/>
                </Grid>
                <Grid>
                    <Button onClick={onSubmit_2}>Create Account</Button>
                </Grid>
            </Grid>
        </Paper>
    </Box>
}