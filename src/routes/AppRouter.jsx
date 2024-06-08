import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "../App";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp";


function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/"></Route>
                <Route element={<Home />} path="/home"></Route>
                <Route element={<SignUp />} path="/signUp"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
