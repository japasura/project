import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material"
import {useState} from "react";
import useLogin from "./hooks/useLogin";
import useCreateAccount from "./hooks/useCreateAccount";

export default function Login(props: {authToken: string}) {
    const [state_1, setState_1] = useState({username: "", password: ""})
    const [state_2, setState_2] = useState({username: "", password: ""})
    const login = useLogin(props.authToken)
    const createaccount = useCreateAccount(props.authToken)

    const onChange_1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState_1({...state_1, [e.target.name]: e.target.value})

    }
    const onChange_2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState_2({...state_2, [e.target.name]: e.target.value})
    }
    const onSubmit_1 = () => {
        login(state_1.username, state_1.password).then(r=> {
            alert(r)
        })
    }

    const onSubmit_2 = () => {
        createaccount(state_2.username, state_2.password).then(r=> {
            alert(r)
        })
    }

    return <Paper>
        <Grid container direction={"column"} gap={2} spacing={2}>
            <Grid>
                <TextField label={"Username"} name={"username_1"} onChange={onChange_1}/>
            </Grid>
            <Grid>
                <TextField label={"Password"} name={"password_1"} onChange={onChange_1}/>
            </Grid>
            <Button onClick={onSubmit_1}>Login</Button>
            <Grid>
                <TextField label={"Username"} name={"username_2"} onChange={onChange_2}/>
            </Grid>
            <Grid>
                <TextField label={"Password"} name={"password_2"} onChange={onChange_2}/>
            </Grid>
            <Button onClick={onSubmit_2} >Create Account</Button>

        </Grid>
    </Paper>
}