import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "../App";
import Home from "../pages/Home";


function AppRouter () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />} path="/"></Route>
                    <Route element={<Home />} path="/home"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
