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
                <Link to="/ProfilePhoto">ProfilePhoto</Link>
                <Link to="/Home1">Home1</Link>
                <Link to="/RestoPlat">RestoPlat</Link>
                <Link to="/Search">Search</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Profil">Profil</Link>
            </Box>
        );
    }
}

export default Home;