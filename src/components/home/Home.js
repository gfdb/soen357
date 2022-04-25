import React from 'react'
import './home.scss'
// import {Outlet, Link} from 'react-router-dom'

export default function Home() {
	return (
		<div className = 'home-container'>
			<div className = 'image-logo'>
				<img  src="/images/img2.jpeg" alt="logo"/>
				<div className='search-bar-container'>
					<input 
						className = "search-bar"
						type="text"
						placeholder = "Search for an item to rent..."
						required 

					/>
					{/* <button>

					</button> */}
				</div>
			</div>	
		</div>
	)
}