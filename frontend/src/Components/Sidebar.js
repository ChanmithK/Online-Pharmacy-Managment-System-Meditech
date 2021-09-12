import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<div className='Sidebar'>
			<ul className='SidebarList'>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/home'
					activeClassName='active-nav'
					className='row'>
					Home
				</NavLink>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/orders'
					activeClassName='active-nav'
					className='row'>
					Orders
				</NavLink>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/invoice'
					activeClassName='active-nav'
					className='row'>
					Invoice
				</NavLink>
				{/* <NavLink
					style={{ textDecoration: "none" }}
					to='/history'
					activeClassName='active-nav'
					className='row'>
					History
				</NavLink> */}
				<NavLink
					style={{ textDecoration: "none" }}
					to='/profile'
					activeClassName='active-nav'
					className='row'>
					Profile
				</NavLink>
			</ul>
		</div>
	);
}

export default Sidebar;
