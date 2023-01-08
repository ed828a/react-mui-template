import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = (mode) => {
    console.log('mode:', mode)
    return createTheme({
    palette: {
        mode: mode,
        primary: {
          main: '#bd0707',
        },
        secondary: {
          main: '#ffff00',
        },
      },
      typography: {
        body1: {
          fontFamily: 'Roboto',
        },
        fontFamily: 'Bangers',
        caption: {
          fontFamily: 'Do Hyeon',
        },
        overline: {
          fontFamily: 'Do Hyeon',
        },
        body2: {
          fontFamily: 'Roboto',
        },
      },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    borderRadius: 8.5,
                    textTransform: "none",
                    "&.MuiButton-contained": {
                        backgroundColor: "#009be5",
                        "&:hover": {
                            backgroundColor: "#006db3",
                        },
                    },
                    "&.MuiButton-outlined": {
                        color: "#fff",
                        borderColor: "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "1.7rem",
                },
            },
        },
    },
})};

export default theme;
