import React from 'react'
import './nav.scss'
import {Link, Outlet} from 'react-router-dom'

export default function Nav() {
	return (
		<>
			<div className = 'nav-container'>
				<nav >
					<ul>
						<li className = ''>
							<Link to="/">Home</Link>
						</li>
						<li className = ''>
							<Link to="/search">Search</Link>
						</li>
						<li className = ''>
							<Link to="/rent">Rent</Link>
						</li>
						<li className = ''>
							<Link to="/about">About</Link>
						</li>
					</ul>	
				</nav>
			</div>
			<Outlet/>
		</>

	)
}