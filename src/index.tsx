import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./login";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Login/>}/>
              <Route path={"dash"} element={<App/>}/>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>
);

