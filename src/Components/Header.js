import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
	const navStyle={
		color: 'black'
	}
	return (
		<nav>
			<ul className='nav-Links'>
				<Link style={navStyle} to="/electric_car">
					<li>Electric Cars</li>
				</Link>
				<li className='nav-heading'>Suitability Tool </li>
				<Link style={navStyle} to="/my_bookings">
					<li className='nav-heading'>My Bookings</li>
				</Link>
				<Link style={navStyle} to="/">
					<li className='nav-heading'>Sign Out</li>
				</Link>
				
			</ul>
		</nav>
	)
}
  
export default Header;