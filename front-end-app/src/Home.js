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
                <Link to="/Post">Post</Link>
                <Link to="/Rightbar">Rightbar</Link>
                <Link to="/Share">Share</Link>
                <Link to="/Topbar">Topbar</Link>
                <Link to="/Wall">Wall</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Connect">Connect</Link>
            </Box>
        );
    }
}

export default Home;