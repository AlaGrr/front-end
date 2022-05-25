import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

class Home extends React.Component {
    render() {
        return (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link to="/menu">Menu</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Profile">Profile</Link>
            </Box>
        );
    }
}

export default Home;