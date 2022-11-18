import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login";
import useAuthToken from "./hooks/useAuthToken";
import Typography from "@mui/material/Typography";

export const host = "http://122.166.189.206"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Index = () => {
    const authToken = useAuthToken()
    if (!authToken) {
        return <Typography variant={"h5"}>Server down! Visit again!</Typography>
    }

    return <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login authToken={authToken}/>}/>
                <Route path={"/dashboard"} element={<App authToken={authToken}/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
}

root.render(
    <Index/>
);

