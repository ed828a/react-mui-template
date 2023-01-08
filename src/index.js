import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";


import ThemeContextProvider from "./components/Contexts/ThemeContextProvider";
import AppRoutes from "./components/apps/AppRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <ThemeContextProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppRoutes />
    </ThemeContextProvider>
);
