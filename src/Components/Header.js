import * as React from "react";
import '../App.css'
import {Link} from 'react-router-dom'
import My_Bookings from "./My_Bookings";


// importing material UI components


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CarRental from "@mui/icons-material/CarRental";

export default function Header() {
return (
	<AppBar style={{ background: 'white', color: 'black' }} position="static">
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<CarRental className="Car-Rentals"/> &nbsp; &nbsp;<h9>e-Ride</h9>
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}
        <div style={{marginLeft:'auto'}}>
            <Button color="inherit" style={{float:"left", color:"pink"}}>Electric Cars</Button>
            <Button color="inherit" style={{float:"left", color:"pink"}}>Suitability Tool</Button>
			<Button color="inherit" style={{float:"left", color:"pink"}}>My Bookings</Button>
			<Button color="inherit" style={{float:"left"}}>Sign Out</Button>
        </div> 
        
		</Toolbar>
	</AppBar>
);
}
