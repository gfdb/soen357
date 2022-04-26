import React from 'react'
import './footer.scss'
import {Link, Outlet} from 'react-router-dom'

export default function Nav() {
	return (
		<>
			<Outlet/>
			<div className = 'footer-container'>
				<nav >
					<ul>
						<li className = ''>
							<Link to="/">Footer</Link>
						</li>
						<li className = ''>
							<Link to="/search">Footer</Link>
						</li>
						<li className = ''>
							<Link to="/rent">Footer</Link>
						</li>
						<li className = ''>
							<Link to="/about">Footer</Link>
						</li>
					</ul>	
				</nav>
			</div>
			
		</>

	)
}