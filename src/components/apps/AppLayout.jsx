import { Paper, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import HorizonSearchAppBar from "../navbars/HorizonNavbar";

const AppLayout = () => {
    return (
        <Paper
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                // border: "2px solid blue",
            }}
        >
            <HorizonSearchAppBar />
            <Box
                sx={{
                  flexGrow: 1,
                    // border: "2px solid #CE17DF",
                }}
            >
                <Outlet />
            </Box>

            <Footer />
        </Paper>
    );
};

export default AppLayout;
