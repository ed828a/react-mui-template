import React, { createContext, useReducer } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { themeReducer } from "./reducers";


export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, { themeMode: "light" });

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme(state.themeMode)}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
