import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import NoMatchRoute from "../common/NoMatchRoute";
import App from "./App";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<App />} />
                    
                    <Route path="*" element={<NoMatchRoute />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
