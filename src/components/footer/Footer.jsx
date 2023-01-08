import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import ProTip from "../common/ProTip";

const StyledBox = styled(Box)(({theme}) => ({
    paddingBottom: "32px",
    // border: "2px solid darkgreen",
}))

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Footer = () => {
    return (
        <StyledBox>
            <ProTip />
            <Copyright />
        </StyledBox>
    );
};

export default Footer;
