import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


export default function App() {
    return (
        <Box
            minWidth="sm"
            sx={{
                textAlign: "center",
                // border: "2px solid blue"
            }}
        >
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App example
                </Typography>
            </Box>
        </Box>
    );
}
