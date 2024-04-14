import React from "react";
import {
    Link,
    Typography,
    Avatar,
    AppBar,
    Toolbar,
    Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

export default function NavBar({ drawerWidth }) {
    const logoHeight = 0.18 * parseInt(drawerWidth);

    return (
        <AppBar
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:"#001a29" }}
            position="static"
        >
            <Toolbar>
                <Link
                    color="inherit"
                    href="/"
                    flexGrow={1}
                    underline="none"
                    sx={{ textDecoration: "none", "&:hover": { fontSize: "16.5px" } }}
                >
                        <img alt="logo" src=".\images\logo.png" style={{ height: `${logoHeight}px`, marginRight: "10px" }}/>
                </Link>

                <Typography color="inherit" mr={2}>
                    Mohamed Ali
                </Typography>

                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar alt="Mohamed ali" src=".\images\1.jpg" />
                </StyledBadge>
            </Toolbar>
        </AppBar>
    );
}
